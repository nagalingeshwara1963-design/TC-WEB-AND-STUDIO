"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BASE_PATH, GOATCOUNTER_CODE } from "@/lib/site";

// ─── Data types (from the GoatCounter v0 API) ───
type DayStat = { day: string; daily: number };
type Hit = { path: string; title: string; count: number; event: boolean };
type Stat = { name: string; count: number; id?: string };

// GoatCounter sends screen sizes as codes without a display name
const SIZE_NAMES: Record<string, string> = {
  phone: "Phones",
  largephone: "Large phones / small tablets",
  tablet: "Tablets / small laptops",
  desktop: "Computers",
  desktophd: "Large computer screens",
  unknown: "Unknown",
};

// Drop empty rows and fill in missing names
function cleanStats(rows: Stat[], names?: Record<string, string>): Stat[] {
  return rows
    .filter((r) => r.count > 0)
    .map((r) => ({ ...r, name: (names && r.id && names[r.id]) || r.name || (r.id && names?.[r.id]) || "Unknown" }));
}
type Data = {
  total: number;
  totalEvents: number;
  days: DayStat[];
  hits: Hit[];
  refs: Stat[];
  sizes: Stat[];
  systems: Stat[];
  browsers: Stat[];
  locations: Stat[];
};

const KEY_STORAGE = "tc-goatcounter-key";
const API = `https://${GOATCOUNTER_CODE}.goatcounter.com/api/v0`;
const RANGES = [7, 30, 90] as const;

function readKey() {
  try {
    return localStorage.getItem(KEY_STORAGE) || "";
  } catch {
    return "";
  }
}
function saveKey(key: string) {
  try {
    if (key) localStorage.setItem(KEY_STORAGE, key);
    else localStorage.removeItem(KEY_STORAGE);
  } catch {
    // Storage blocked (private mode); the key just won't be remembered
  }
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

// GoatCounter wants hour-rounded UTC times. The end must be the end of today (UTC):
// ending at the current hour returns empty results.
function rangeTimes(days: number) {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  end.setUTCDate(end.getUTCDate() + 1);
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  start.setUTCDate(start.getUTCDate() - (days - 1));
  return { start: start.toISOString(), end: end.toISOString() };
}

async function api<T>(key: string, path: string, params: Record<string, string>): Promise<T> {
  const url = `${API}${path}?${new URLSearchParams(params)}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" } });
    if (res.status === 429) {
      await wait(1200);
      continue;
    }
    if (res.status === 401 || res.status === 403) throw new Error("auth");
    if (!res.ok) throw new Error(`GoatCounter returned ${res.status}`);
    return res.json();
  }
  throw new Error("GoatCounter is busy, try again in a minute");
}

async function loadData(key: string, days: number): Promise<Data> {
  const t = rangeTimes(days);
  // Sequential with small gaps to stay under GoatCounter's 4 requests/second limit
  const total = await api<{ total: number; total_events: number; stats: DayStat[] }>(key, "/stats/total", t);
  await wait(300);
  const hits = await api<{ hits: Hit[] }>(key, "/stats/hits", { ...t, limit: "100" });
  const page = async (name: string) => {
    await wait(300);
    return (await api<{ stats: Stat[] }>(key, `/stats/${name}`, { ...t, limit: "8" })).stats || [];
  };
  const refs = await page("toprefs");
  const sizes = await page("sizes");
  const systems = await page("systems");
  const browsers = await page("browsers");
  const locations = await page("locations");
  return {
    total: total.total || 0,
    totalEvents: total.total_events || 0,
    // The end-of-day range also returns tomorrow (empty), so keep days up to today only
    days: (total.stats || [])
      .filter((d) => d.day <= new Date().toISOString().slice(0, 10))
      .map((d) => ({ day: d.day, daily: d.daily || 0 })),
    hits: hits.hits || [],
    refs: refs.filter((r) => r.count > 0),
    sizes: cleanStats(sizes, SIZE_NAMES),
    systems: cleanStats(systems),
    browsers: cleanStats(browsers),
    locations: cleanStats(locations),
  };
}

// ─── Small UI pieces ───
function formatDay(day: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" }) {
  const d = new Date(`${day}T00:00:00Z`);
  return d.toLocaleDateString("en-IN", { ...opts, timeZone: "UTC" });
}

function Card({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl bg-white border border-purple-200/80 p-5 sm:p-6 ${className}`}>
      <h2 className="text-base font-bold text-[#180f2d] font-display mb-4">{title}</h2>
      {children}
    </section>
  );
}

function StatTile({ label, value, note }: { label: string; value: number | string; note?: string }) {
  return (
    <div className="rounded-2xl bg-white border border-purple-200/80 p-5">
      <p className="text-sm font-semibold text-[#5e5377]">{label}</p>
      <p className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#180f2d] font-display tabular-nums">{value}</p>
      {note && <p className="mt-1 text-xs text-[#6e6488]">{note}</p>}
    </div>
  );
}

function Empty({ text = "No data yet for this period." }: { text?: string }) {
  return <p className="text-sm text-[#6e6488] py-2">{text}</p>;
}

// Ranked horizontal bar list (single series, so one colour; numbers in text ink)
function RankedList({ rows, color = "#7c3aed" }: { rows: Stat[]; color?: string }) {
  if (!rows.length) return <Empty />;
  const max = Math.max(...rows.map((r) => r.count), 1);
  const sum = rows.reduce((a, r) => a + r.count, 0) || 1;
  return (
    <ul className="space-y-2.5">
      {rows.map((r) => (
        <li key={r.name} title={`${r.name}: ${r.count}`}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="text-[#2e2446] font-medium truncate">{r.name || "(unknown)"}</span>
            <span className="text-[#5e5377] tabular-nums shrink-0">
              {r.count} <span className="text-[#6e6488]">· {Math.round((r.count / sum) * 100)}%</span>
            </span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-purple-50 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${Math.max((r.count / max) * 100, 2)}%`, background: color }}></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Daily visits bar chart with hover tooltip and a table view
function VisitsChart({ days }: { days: DayStat[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const [asTable, setAsTable] = useState(false);
  const max = Math.max(...days.map((d) => d.daily), 0);
  const niceMax = max <= 4 ? 4 : Math.ceil(max / 4) * 4;

  if (!days.length) return <Empty />;

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={() => setAsTable((v) => !v)}
          className="text-xs font-semibold text-purple-800 underline underline-offset-4 cursor-pointer"
        >
          {asTable ? "Show chart" : "Show as table"}
        </button>
      </div>

      {asTable ? (
        <div className="max-h-72 overflow-y-auto rounded-xl border border-purple-100">
          <table className="w-full text-sm">
            <thead className="bg-purple-50 text-[#2e2446]">
              <tr>
                <th className="text-left font-semibold px-3 py-2">Day</th>
                <th className="text-right font-semibold px-3 py-2">Visits</th>
              </tr>
            </thead>
            <tbody>
              {[...days].reverse().map((d) => (
                <tr key={d.day} className="border-t border-purple-100">
                  <td className="px-3 py-1.5 text-[#3c3252]">{formatDay(d.day, { weekday: "short", day: "numeric", month: "short" })}</td>
                  <td className="px-3 py-1.5 text-right tabular-nums text-[#180f2d] font-semibold">{d.daily}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="relative">
          {/* Gridlines + y labels (recessive) */}
          <div className="relative h-48 sm:h-56 ml-7">
            {[1, 0.5, 0].map((f) => (
              <div key={f} className="absolute inset-x-0 border-t border-purple-100" style={{ bottom: `${f * 100}%` }}>
                <span className="absolute -left-7 -top-2 w-6 text-right text-[10px] text-[#6e6488] tabular-nums">
                  {Math.round(niceMax * f)}
                </span>
              </div>
            ))}

            {/* Bars: thin, 2px gaps, 4px rounded tops anchored to the baseline */}
            <div className="absolute inset-0 flex items-end gap-[2px]" onMouseLeave={() => setHover(null)}>
              {days.map((d, i) => (
                <div
                  key={d.day}
                  className="relative flex-1 h-full flex items-end cursor-default"
                  onMouseEnter={() => setHover(i)}
                  onTouchStart={() => setHover(i)}
                  aria-label={`${formatDay(d.day)}: ${d.daily} visits`}
                >
                  <div
                    className="w-full rounded-t-[4px] transition-opacity"
                    style={{
                      height: `${niceMax ? (d.daily / niceMax) * 100 : 0}%`,
                      minHeight: d.daily ? 3 : 0,
                      background: "#7c3aed",
                      opacity: hover === null || hover === i ? 1 : 0.45,
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Tooltip */}
            {hover !== null && (
              <div
                className="pointer-events-none absolute -top-2 z-10 -translate-x-1/2 -translate-y-full rounded-lg bg-[#1c1335] text-white text-xs px-2.5 py-1.5 whitespace-nowrap shadow-lg"
                style={{ left: `${((hover + 0.5) / days.length) * 100}%` }}
              >
                <span className="font-semibold">{days[hover].daily} visits</span>
                <span className="text-purple-200"> · {formatDay(days[hover].day, { weekday: "short", day: "numeric", month: "short" })}</span>
              </div>
            )}
          </div>

          {/* X labels: first, middle, last */}
          <div className="ml-7 mt-2 flex justify-between text-[11px] text-[#6e6488]">
            <span>{formatDay(days[0].day)}</span>
            {days.length > 2 && <span>{formatDay(days[Math.floor(days.length / 2)].day)}</span>}
            <span>{formatDay(days[days.length - 1].day)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Group event paths like "whatsapp-click/hero" into leads
const LEAD_TYPES = [
  { prefix: "whatsapp-click/", label: "WhatsApp clicks" },
  { prefix: "form-sent/", label: "Enquiry forms sent" },
  { prefix: "instagram-click/", label: "Instagram clicks" },
  { prefix: "email-click/", label: "Email clicks" },
];

const SECTION_NAMES: Record<string, string> = {
  hero: "Top of page",
  header: "Top bar",
  footer: "Footer",
  contact: "Contact section",
  pricing: "Pricing",
  shoots: "Shoots",
  services: "Services",
  page: "Floating button / other",
  whatsapp: "Enquiry form",
};

// ─── Main component ───
export default function Dashboard() {
  const [key, setKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [ready, setReady] = useState(false);
  const [range, setRange] = useState<(typeof RANGES)[number]>(30);
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updated, setUpdated] = useState<Date | null>(null);

  useEffect(() => {
    setKey(readKey());
    setReady(true);
  }, []);

  const refresh = useCallback(async () => {
    if (!key) return;
    setLoading(true);
    setError("");
    try {
      setData(await loadData(key, range));
      setUpdated(new Date());
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      if (msg === "auth") {
        setError("GoatCounter didn't accept this key. Check that you copied it fully and that it has 'Read statistics' permission.");
      } else {
        setError(`Couldn't load stats: ${msg}`);
      }
    } finally {
      setLoading(false);
    }
  }, [key, range]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const derived = useMemo(() => {
    if (!data) return null;
    const pages = data.hits.filter((h) => !h.event);
    const events = data.hits.filter((h) => h.event);
    const leads = LEAD_TYPES.map((t) => ({
      name: t.label,
      count: events.filter((e) => e.path.startsWith(t.prefix)).reduce((a, e) => a + e.count, 0),
    }));
    const bySection = new Map<string, number>();
    events
      .filter((e) => e.path.startsWith("whatsapp-click/") || e.path.startsWith("form-sent/"))
      .forEach((e) => {
        const section = e.path.split("/")[1] || "page";
        const name = SECTION_NAMES[section] || section;
        bySection.set(name, (bySection.get(name) || 0) + e.count);
      });
    const today = data.days.length ? data.days[data.days.length - 1].daily : 0;
    const last7 = data.days.slice(-7).reduce((a, d) => a + d.daily, 0);
    return {
      pageVisits: Math.max(data.total - data.totalEvents, 0),
      today,
      last7,
      whatsapp: leads[0].count,
      forms: leads[1].count,
      leads: leads.filter((l) => l.count > 0),
      leadSections: [...bySection.entries()].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
      pages: pages.slice(0, 8).map((p) => ({ name: p.title ? `${p.title.replace(/ \| TC Web & Studio$/, "")}` : p.path, count: p.count })),
    };
  }, [data]);

  const connect = (e: React.FormEvent) => {
    e.preventDefault();
    const k = keyInput.trim();
    if (!k) return;
    saveKey(k);
    setKey(k);
    setKeyInput("");
  };

  const forget = () => {
    saveKey("");
    setKey("");
    setData(null);
  };

  return (
    <main className="min-h-screen bg-[#faf8ff] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <img src={`${BASE_PATH}/images/brand/tc-mark.png`} alt="" width={48} height={34} className="w-12 h-auto" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#180f2d] font-display leading-tight">TC Dashboard</h1>
              <p className="text-sm text-[#5e5377]">Website visits and enquiries for tcwebandstudio.in</p>
            </div>
          </div>

          {key && (
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-xl border border-purple-200 bg-white p-1" role="group" aria-label="Time range">
                {RANGES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRange(r)}
                    aria-pressed={range === r}
                    className={`min-h-[36px] px-3 rounded-lg text-sm font-bold font-display cursor-pointer transition-colors ${
                      range === r ? "bg-purple-700 text-white" : "text-[#3c3252] hover:bg-purple-50"
                    }`}
                  >
                    {r} days
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={refresh}
                disabled={loading}
                className="min-h-[44px] px-4 rounded-xl border border-purple-200 bg-white text-sm font-bold text-purple-800 hover:bg-purple-50 disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Loading…" : "Refresh"}
              </button>
            </div>
          )}
        </header>

        {/* Connect screen */}
        {ready && !key && (
          <div className="max-w-xl rounded-2xl bg-white border border-purple-200 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#180f2d] font-display mb-2">Connect your GoatCounter</h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm text-[#3c3252] mb-5">
              <li>
                Open{" "}
                <a href={`https://${GOATCOUNTER_CODE}.goatcounter.com`} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-800 underline">
                  {GOATCOUNTER_CODE}.goatcounter.com
                </a>{" "}
                and sign in.
              </li>
              <li>Click your email at the top → <b>API</b> → <b>New API key</b>.</li>
              <li>Tick only <b>Read statistics</b>, save, and copy the key.</li>
              <li>Paste it below.</li>
            </ol>
            <form onSubmit={connect} className="flex flex-col sm:flex-row gap-3">
              <input
                type="password"
                autoComplete="off"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="Paste your API key"
                aria-label="GoatCounter API key"
                className="flex-1 px-4 py-3 rounded-xl bg-[#faf8ff] border border-purple-200 focus:border-purple-600 text-base outline-none"
              />
              <button type="submit" className="min-h-[48px] px-6 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold font-display cursor-pointer">
                Connect
              </button>
            </form>
            <p className="mt-4 text-xs text-[#6e6488]">
              The key is saved only in this browser on this device. It's never sent anywhere except GoatCounter.
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div role="alert" className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span>{error}</span>
            <button type="button" onClick={forget} className="font-bold underline cursor-pointer shrink-0">
              Enter a different key
            </button>
          </div>
        )}

        {/* Loading skeleton */}
        {key && loading && !data && <p className="text-sm text-[#5e5377]">Loading your stats…</p>}

        {/* Dashboard */}
        {key && data && derived && (
          <div className={`space-y-5 ${loading ? "opacity-60" : ""}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatTile label={`Visits · ${range} days`} value={derived.pageVisits} />
              <StatTile label="Visits today" value={derived.today} note="Day in UTC (IST − 5½ h)" />
              <StatTile label={`WhatsApp clicks · ${range} days`} value={derived.whatsapp} />
              <StatTile label={`Forms sent · ${range} days`} value={derived.forms} />
            </div>

            <Card title={`Visits per day · last ${range} days`}>
              <VisitsChart days={data.days} />
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Card title="Leads">
                {derived.leads.length ? <RankedList rows={derived.leads} color="#d97706" /> : <Empty text="No WhatsApp, form, Instagram or email clicks yet." />}
                {derived.leadSections.length > 0 && (
                  <>
                    <h3 className="text-sm font-bold text-[#2e2446] mt-6 mb-3">Where WhatsApp and form leads started</h3>
                    <RankedList rows={derived.leadSections} color="#d97706" />
                  </>
                )}
              </Card>

              <Card title="Top pages">
                <RankedList rows={derived.pages} />
              </Card>

              <Card title="Where visitors came from">
                <RankedList rows={data.refs.map((r) => ({ name: r.name || "Direct / unknown", count: r.count }))} />
              </Card>

              <Card title="Locations">
                <RankedList rows={data.locations} />
              </Card>

              <Card title="Screen sizes (phone vs computer)">
                <RankedList rows={data.sizes} />
              </Card>

              <Card title="Systems and browsers">
                <RankedList rows={data.systems} />
                <div className="h-5"></div>
                <RankedList rows={data.browsers} />
              </Card>
            </div>

            <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 text-xs text-[#6e6488]">
              <span>
                {updated ? `Updated ${updated.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}. ` : ""}
                Visits from people with ad blockers aren&apos;t counted.
              </span>
              <span className="flex gap-4">
                <a href={`https://${GOATCOUNTER_CODE}.goatcounter.com`} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-800 underline">
                  Open full GoatCounter
                </a>
                <button type="button" onClick={forget} className="font-semibold text-purple-800 underline cursor-pointer">
                  Forget key on this device
                </button>
              </span>
            </footer>
          </div>
        )}
      </div>
    </main>
  );
}
