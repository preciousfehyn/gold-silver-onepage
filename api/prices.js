// api/prices.js (Vercel Serverless Function)

let cache = {
  data: null,
  expiresAt: 0,
};

export default async function handler(req, res) {
  try {
    // Only allow GET
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Short cache (30s) to reduce provider calls
    const now = Date.now();
    if (cache.data && now < cache.expiresAt) {
      res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=60");
      return res.status(200).json({ ...cache.data, cached: true });
    }

    const apiKey = process.env.METALSDEV_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "Missing METALSDEV_API_KEY in Vercel environment variables",
      });
    }

    const url =
      `https://api.metals.dev/v1/latest?api_key=${encodeURIComponent(apiKey)}` +
      `&currency=USD&unit=toz`;

    const providerRes = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    if (!providerRes.ok) {
      const text = await providerRes.text();
      return res.status(502).json({
        error: `Provider error: HTTP ${providerRes.status}`,
        details: text.slice(0, 500),
      });
    }

    const json = await providerRes.json();

    const gold = Number(json?.metals?.gold);
    const silver = Number(json?.metals?.silver);

    if (!Number.isFinite(gold) || !Number.isFinite(silver)) {
      return res.status(500).json({
        error: "Unexpected Metals.dev response (missing metals.gold/metals.silver).",
      });
    }

    const payload = {
      gold,
      silver,
      currency: json?.currency || "USD",
      updatedAt: typeof json?.timestamp === "string" ? json.timestamp : new Date().toISOString(),
    };

    cache = {
      data: payload,
      expiresAt: Date.now() + 30_000,
    };

    // Vercel edge caching hint
    res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=60");
    return res.status(200).json({ ...payload, cached: false });
  } catch (err) {
    return res.status(500).json({
      error: "Serverless function failed",
      details: String(err?.message || err),
    });
  }
}
