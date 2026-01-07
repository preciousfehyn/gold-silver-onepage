import { useEffect, useMemo, useState } from "react";

const BRAND = {
  name: "Gold&Silver",
  handle: "@gldsilver",
  tagline: "Macro signals. Real asset conviction.",
};

// Put your real X profile URL here later
const X_URL = "https://x.com/gldsilver";

// Assets (update filenames if yours differ)
const ASSETS = {
  hero: "/assets/hero-bg.jpeg",
  featured: "/assets/featured-bg.jpeg",
  g1: "/assets/silver-vs-nvidia.jpeg",
  g2: "/assets/silver-queue.jpeg",
  g3: "/assets/world-silver-reserves.jpeg",
  g4: "/assets/world-gold-reserves.jpeg",
  g5: "/assets/gold-silver-ribbon.jpeg",
  logo: "/logo.png",
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const posts = useMemo(
    () => [
      {
        title: "Gold above major levels: what matters next",
        date: "Jan 2026",
        text:
          "The level is the headline. The follow-through is the signal. Watch liquidity, real rates, and whether risk-on rotates into metals or away from it.",
      },
      {
        title: "Silver: supply reality vs paper narrative",
        date: "Jan 2026",
        text:
          "Silver moves late — then violently. Industrial demand plus investment demand is the combo. The key question: who owns physical when the crowd arrives?",
      },
      {
        title: "3 macro signals we track weekly",
        date: "Jan 2026",
        text:
          "Dollar trend, real yields direction, and credit/risk appetite. Metals don’t just react — they often lead the narrative shift.",
      },
    ],
    []
  );

  const gallery = useMemo(
    () => [
      {
        title: "Silver vs NVIDIA",
        caption: "Perspective shift: real assets vs market darlings.",
        img: ASSETS.g1,
        link:
          "https://www.msn.com/en-in/lifestyle/pets-animals/silver-overtakes-nvidia-the-4-7-trillion-market-cap-tussle-nobody-saw-coming/ar-AA1TbKSG?apiversion=v2&domshim=1&noservercache=1&noservertelemetry=1&batchservertelemetry=1&renderwebcomponents=1&wcseo=1",
      },
      {
        title: "World Gold Reserves",
        caption: "Global distribution of gold reserves by country.",
        img: ASSETS.g2,
        link: "https://www.gold.org/goldhub/data/gold-reserves-by-country",
      },
      {
        title: "World Silver Reserves",
        caption: "Global distribution of silver reserves by country.",
        img: ASSETS.g3,
        link: "https://worldpopulationreview.com/country-rankings/silver-reserves-by-country",
      },
    ],
    []
  );

  useEffect(() => {
    const closeOnEsc = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <div className="min-h-screen">
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />

      {/* HERO */}
      <SectionBG
        id="home"
        bg={ASSETS.hero}
        className="min-h-[92vh] flex items-center"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-luxury uppercase text-amber-300/90">
                {BRAND.handle} • Gold • Silver • Macro
              </p>

              <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                {BRAND.name} Intelligence
                <span className="block text-amber-300">
                  for real-asset conviction.
                </span>
              </h1>

              <p className="mt-5 text-zinc-200/90 max-w-xl">
                Clean visuals, breaking levels, and macro context — designed for
                fast reading on any screen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#prices"
                  className="px-5 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
                >
                  Live Prices
                </a>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl brand-border glass hover:bg-white/10 transition"
                >
                  Follow on X
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass brand-border rounded-2xl p-6 shadow-glow">
                <p className="text-xs tracking-luxury uppercase text-amber-300/90">
                  Today’s Focus
                </p>
                <div className="mt-3 space-y-3 text-zinc-200/90">
                  <Bullet>Macro drivers behind the move</Bullet>
                  <Bullet>Key levels & positioning</Bullet>
                  <Bullet>Charts built for fast clarity</Bullet>
                </div>

                <div className="brand-divider my-6" />

                <p className="text-sm text-zinc-300/90">
                  <span className="text-amber-300 font-semibold">
                    {BRAND.tagline}
                  </span>{" "}
                  No noise. Just signal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionBG>

      {/* LIVE PRICES (flashier) */}
      <section id="prices" className="py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl">
                Live Gold & Silver
              </h2>
              <p className="mt-2 text-zinc-400 max-w-2xl"></p>
            </div>
          </div>

          <div className="mt-8">
            <LivePrices />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <SectionBG id="featured" bg={ASSETS.featured} className="py-18 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16">
          <div className="max-w-3xl glass brand-border rounded-2xl p-7 sm:p-10 shadow-glow">
            <p className="text-xs tracking-luxury uppercase text-red-300/90">
              Breaking / Macro
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Big levels change positioning.
            </h2>
            <p className="mt-4 text-zinc-200/90">
              The headline is the breakout. The signal is what happens next:
              follow-through, retrace behavior, and how liquidity responds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#blog"
                className="px-5 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
              >
                Read the Blog
              </a>
              <a
                href="#charts"
                className="px-5 py-3 rounded-xl brand-border glass hover:bg-white/10 transition"
              >
                See the charts
              </a>
            </div>
          </div>
        </div>
      </SectionBG>

      {/* GALLERY */}
      <section id="charts" className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl">Charts & Visuals</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl">
            Tap to view full-size. Built to look clean on mobile and desktop.
          </p>

          {/* ✅ PATCH: make gallery cards <a> links (no lightbox click interception) */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <a
                key={g.title}
                href={g.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left rounded-2xl overflow-hidden brand-border bg-zinc-950/40 hover:bg-zinc-950/60 transition"
              >
                <div
                  className="h-44 sm:h-48 bg-center bg-cover"
                  style={{ backgroundImage: `url(${g.img})` }}
                />
                <div className="p-5">
                  <div className="font-semibold">{g.title}</div>
                  <div className="mt-1 text-sm text-zinc-400">{g.caption}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl">Micro Blog</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl">
            Short reads. Strong signal. Designed for quick scanning.
          </p>

          <div className="mt-8 grid gap-4">
            {posts.map((p) => (
              <article
                key={p.title}
                className="relative rounded-2xl overflow-hidden brand-border shadow-glow"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${ASSETS.g5})` }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}
                <div className="relative p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="font-serif text-xl sm:text-2xl">{p.title}</h3>
                    <span className="text-sm text-zinc-300/80">{p.date}</span>
                  </div>
                  <p className="mt-3 text-zinc-200/90 leading-relaxed">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* MEDIA KIT */}
      <section id="media-kit" className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl p-7 sm:p-10 bg-zinc-950/50 brand-border shadow-glow flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs tracking-luxury uppercase text-amber-300/90">
                For Press & Partners
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
                Download the Gold & Silver Media Kit
              </h2>
              <p className="mt-3 text-zinc-400 max-w-xl">
                High-resolution charts, brand assets, and official visuals.
              </p>
            </div>

            <a
              href="/media-kit.zip"
              className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
              title="Place media-kit.zip in /public to enable"
            >
              Download Media Kit
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-5xl w-full rounded-2xl overflow-hidden brand-border bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <div className="font-semibold">{lightbox.title}</div>
                <div className="text-sm text-zinc-400">{lightbox.caption}</div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition"
              >
                Close
              </button>
            </div>
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Components ---------------- */

function TopNav({ navOpen, setNavOpen }) {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Prices", href: "#prices" },
    { label: "Featured", href: "#featured" },
    { label: "Charts", href: "#charts" },
    { label: "Blog", href: "#blog" },
    { label: "Media Kit", href: "#media-kit" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/60 backdrop-blur-md border-b border-amber-500/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-amber-500/15 brand-border overflow-hidden grid place-items-center">
            <img
              src={ASSETS.logo}
              alt="Gold&Silver logo"
              className="h-full w-full object-cover"
              loading="lazy"
              draggable="false"
            />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">{BRAND.name}</div>
            <div className="text-xs text-zinc-400">{BRAND.handle}</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-white/10 transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition text-sm"
          >
            Follow
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition"
          onClick={() => setNavOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          {navOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav */}
      {navOpen && (
        <div className="md:hidden border-t border-amber-500/15 bg-black/70 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-3 rounded-lg text-sm text-zinc-200 hover:bg-white/10 transition"
                onClick={() => setNavOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-4 py-3 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition text-sm text-center"
              onClick={() => setNavOpen(false)}
            >
              Follow on X
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionBG({ id, bg, className = "", children }) {
  return (
    <section
      id={id}
      className={`${className} relative overflow-hidden`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative">{children}</div>
    </section>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300 shadow-glow" />
      <span>{children}</span>
    </div>
  );
}

/**
 * LivePrices (Flashy / Glittery)
 * Fetches from your backend: /api/prices (Vite proxy -> backend :5050)
 */
function LivePrices() {
  const [data, setData] = useState({
    gold: 0,
    silver: 0,
    currency: "USD",
    mode: "loading", // loading | live | error
    lastUpdated: null,
    cached: false,
    error: null,

    // change tracking
    prevGold: null,
    prevSilver: null,

    // session stats (since page load)
    sessionGoldHigh: null,
    sessionGoldLow: null,
    sessionSilverHigh: null,
    sessionSilverLow: null,
  });

  function computeDelta(current, prev) {
    if (!Number.isFinite(current) || !Number.isFinite(prev) || prev === 0) {
      return { dir: "flat", abs: 0, pct: 0 };
    }
    const diff = current - prev;
    const pct = (diff / prev) * 100;
    const dir = diff > 0 ? "up" : diff < 0 ? "down" : "flat";
    return { dir, abs: diff, pct };
  }

  async function fetchPrices() {
    try {
      setData((d) => ({ ...d, mode: "loading", error: null }));

      const res = await fetch("/api/prices", { cache: "no-store" });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
      }

      const json = await res.json();
      const gold = Number(json.gold);
      const silver = Number(json.silver);
      const currency = json.currency || "USD";

      if (!Number.isFinite(gold) || !Number.isFinite(silver)) {
        throw new Error("Bad response: expected numeric gold and silver fields.");
      }

      setData((d) => {
        const next = { ...d };

        // store previous for change calc
        next.prevGold = Number.isFinite(d.gold) && d.gold > 0 ? d.gold : null;
        next.prevSilver = Number.isFinite(d.silver) && d.silver > 0 ? d.silver : null;

        next.gold = gold;
        next.silver = silver;
        next.currency = currency;

        next.mode = "live";
        next.cached = Boolean(json.cached);
        next.lastUpdated = json.updatedAt ? new Date(json.updatedAt) : new Date();
        next.error = null;

        // session high/low (since page load)
        next.sessionGoldHigh =
          d.sessionGoldHigh == null ? gold : Math.max(d.sessionGoldHigh, gold);
        next.sessionGoldLow =
          d.sessionGoldLow == null ? gold : Math.min(d.sessionGoldLow, gold);

        next.sessionSilverHigh =
          d.sessionSilverHigh == null ? silver : Math.max(d.sessionSilverHigh, silver);
        next.sessionSilverLow =
          d.sessionSilverLow == null ? silver : Math.min(d.sessionSilverLow, silver);

        return next;
      });
    } catch (e) {
      setData((d) => ({
        ...d,
        mode: "error",
        error: `Live feed error: ${String(e?.message || e)}`,
      }));
    }
  }

  useEffect(() => {
    fetchPrices();
    const t = setInterval(fetchPrices, 60_000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goldDisplay = data.gold ? formatMoney(data.gold, data.currency) : "—";
  const silverDisplay = data.silver ? formatMoney(data.silver, data.currency) : "—";

  const goldDelta = computeDelta(data.gold, data.prevGold);
  const silverDelta = computeDelta(data.silver, data.prevSilver);

  return (
    <div className="relative rounded-3xl overflow-hidden brand-border shadow-glow">
      {/* Glittery gold background (CSS only) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/25 via-black to-black" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(255,215,128,.55) 0 2px, transparent 3px)," +
              "radial-gradient(circle at 72% 28%, rgba(255,235,170,.45) 0 1.5px, transparent 3px)," +
              "radial-gradient(circle at 38% 62%, rgba(255,210,120,.40) 0 2px, transparent 3px)," +
              "radial-gradient(circle at 88% 78%, rgba(255,240,190,.35) 0 1.5px, transparent 3px)," +
              "radial-gradient(circle at 22% 82%, rgba(255,220,150,.30) 0 1.5px, transparent 3px)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(245,158,11,0.24),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
      </div>

      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs tracking-luxury uppercase text-amber-300/95">
              Live Spot Prices
            </p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
              Gold & Silver — {data.currency}
            </h3>

            <p className="mt-2 text-sm text-zinc-200/80">
              {data.mode === "live" ? (
                <>
                  Updated{" "}
                  {data.lastUpdated ? data.lastUpdated.toLocaleTimeString() : ""}{" "}
                  {data.cached ? "• cached" : "• live"}
                </>
              ) : data.mode === "loading" ? (
                "Updating…"
              ) : (
                <span className="text-amber-200/90">{data.error}</span>
              )}
            </p>
          </div>

          <button
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-sm brand-border"
            onClick={fetchPrices}
          >
            Refresh
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <PriceTile
            label="Gold"
            value={goldDisplay}
            accent="gold"
            pulse={data.mode === "loading"}
            delta={goldDelta}
            sessionHigh={data.sessionGoldHigh}
            sessionLow={data.sessionGoldLow}
            currency={data.currency}
          />
          <PriceTile
            label="Silver"
            value={silverDisplay}
            accent="silver"
            pulse={data.mode === "loading"}
            delta={silverDelta}
            sessionHigh={data.sessionSilverHigh}
            sessionLow={data.sessionSilverLow}
            currency={data.currency}
          />
        </div>

        {/* Clean footer note (no endpoint text) */}
        <p className="mt-4 text-xs text-zinc-300/60 text-right">
          Auto-refresh every 60s • Session stats reset on page reload
        </p>
      </div>
    </div>
  );
}

function PriceTile({ label, value, accent, pulse, delta, sessionHigh, sessionLow, currency }) {
  const ring =
    accent === "gold"
      ? "from-amber-300/55 to-amber-500/10"
      : "from-zinc-200/40 to-zinc-400/10";

  const dir = delta?.dir || "flat";

  const badge =
    dir === "up"
      ? { text: "▲", cls: "text-emerald-300 bg-emerald-500/15 border-emerald-400/25" }
      : dir === "down"
      ? { text: "▼", cls: "text-red-300 bg-red-500/15 border-red-400/25" }
      : { text: "•", cls: "text-zinc-300 bg-white/10 border-white/15" };

  const pctText =
    dir === "flat" || !Number.isFinite(delta?.pct)
      ? "0.00%"
      : `${delta.pct > 0 ? "+" : ""}${delta.pct.toFixed(2)}%`;

  const moveText =
    dir === "flat" || !Number.isFinite(delta?.abs)
      ? "0.00"
      : `${delta.abs > 0 ? "+" : ""}${delta.abs.toFixed(2)}`;

  const hi = Number.isFinite(sessionHigh) ? formatMoney(sessionHigh, currency) : "—";
  const lo = Number.isFinite(sessionLow) ? formatMoney(sessionLow, currency) : "—";

  return (
    <div className="relative rounded-2xl overflow-hidden brand-border bg-black/35">
      <div className={`absolute inset-0 bg-gradient-to-br ${ring}`} />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-luxury uppercase text-zinc-200/80">{label}</p>

          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center justify-center h-7 min-w-10 px-2 rounded-full border text-sm font-semibold ${badge.cls}`}
              title="Change since last refresh"
            >
              {badge.text}
            </span>

            <span
              className={`h-2.5 w-2.5 rounded-full ${
                pulse ? "bg-amber-300 animate-pulse" : "bg-amber-300/70"
              } shadow-glow`}
            />
          </div>
        </div>

        <div className="mt-3 text-4xl sm:text-5xl font-semibold">{value}</div>

        <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-zinc-200/75">Spot • Troy ounce (toz)</p>

          <div className="text-sm font-medium">
            <span
              className={
                dir === "up"
                  ? "text-emerald-300"
                  : dir === "down"
                  ? "text-red-300"
                  : "text-zinc-300"
              }
            >
              {pctText}
            </span>
            <span className="text-zinc-300/70"> ({moveText})</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-black/35 brand-border p-3">
            <div className="text-xs tracking-luxury uppercase text-zinc-300/70">
              Session High
            </div>
            <div className="mt-1 text-sm font-semibold text-zinc-100">{hi}</div>
          </div>
          <div className="rounded-xl bg-black/35 brand-border p-3">
            <div className="text-xs tracking-luxury uppercase text-zinc-300/70">
              Session Low
            </div>
            <div className="mt-1 text-sm font-semibold text-zinc-100">{lo}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatMoney(value, currency = "USD") {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `$${Number(value).toFixed(2)}`;
  }
}

function Footer() {
  return (
    <footer className="py-10 border-t border-amber-500/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Gold&Silver • {BRAND.handle}
        </p>
        <div className="text-sm text-zinc-500 flex gap-4">
          <a className="hover:text-zinc-300" href="#prices">
            Prices
          </a>
          <a className="hover:text-zinc-300" href="#charts">
            Charts
          </a>
          <a className="hover:text-zinc-300" href="#media-kit">
            Media Kit
          </a>
        </div>
      </div>
    </footer>
  );
}
