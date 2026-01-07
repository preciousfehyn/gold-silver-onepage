import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config({ path: new URL("./.env", import.meta.url) });

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());

// 30s cache to reduce provider calls
let cache = {
  data: null,
  expiresAt: 0,
};

app.get("/health", (req, res) => res.json({ ok: true }));

/**
 * GET /api/prices
 * Returns:
 * {
 *   gold: number,
 *   silver: number,
 *   currency: "USD",
 *   updatedAt: ISO string,
 *   cached: boolean
 * }
 */
app.get("/api/prices", async (req, res) => {
  try {
    const now = Date.now();

    // Serve from cache if valid
    if (cache.data && now < cache.expiresAt) {
      return res.json({ ...cache.data, cached: true });
    }

    const apiKey = process.env.METALSDEV_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "Missing METALSDEV_API_KEY in backend/.env",
      });
    }

    // Metals.dev latest endpoint
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
      // metals.dev may return timestamp; if not, we set our own
      updatedAt:
        typeof json?.timestamp === "string"
          ? json.timestamp
          : new Date().toISOString(),
    };

    cache = {
      data: payload,
      expiresAt: Date.now() + 30_000,
    };

    return res.json({ ...payload, cached: false });
  } catch (err) {
    return res.status(500).json({
      error: "Backend failed to fetch prices",
      details: String(err?.message || err),
    });
  }
});

const port = Number(process.env.PORT || 5050);
app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`);
  console.log(`✅ Prices endpoint: http://localhost:${port}/api/prices`);
});
