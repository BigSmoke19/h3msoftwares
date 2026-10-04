// SEO smoke test against a running production server.
//   npm run build && npm run start   (in one terminal)
//   npm run check:seo                (in another; BASE_URL defaults to http://localhost:3000)
//
// Verifies every sitemap URL renders with unique titles/descriptions, a
// canonical pointing at the production domain, OG/Twitter tags, one <h1>,
// parseable JSON-LD, image alt text, and working internal links.

const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://h3msoftwares.com").replace(/\/$/, "");

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const toLocal = (url) => url.replace(SITE, BASE);

const attr = (tag, name) =>
  tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1];
const meta = (html, key) => {
  for (const tag of html.match(/<meta [^>]*>/gi) ?? []) {
    if (attr(tag, "name") === key || attr(tag, "property") === key)
      return attr(tag, "content");
  }
};

async function get(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, body: await res.text(), headers: res.headers };
}

// robots.txt
const robots = await get(`${BASE}/robots.txt`);
if (robots.status !== 200) fail("/robots.txt", `status ${robots.status}`);
if (!robots.body.includes(`Sitemap: ${SITE}/sitemap.xml`))
  fail("/robots.txt", "missing Sitemap line");
if (/^Disallow: \/$/m.test(robots.body)) fail("/robots.txt", "blocks the whole site");

// sitemap.xml
const sitemap = await get(`${BASE}/sitemap.xml`);
if (sitemap.status !== 200) fail("/sitemap.xml", `status ${sitemap.status}`);
const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) fail("/sitemap.xml", "no URLs");

const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();

for (const url of urls) {
  const where = url.replace(SITE, "") || "/";
  if (!url.startsWith(SITE)) fail(where, `sitemap URL not on ${SITE}`);
  const { status, body: html } = await get(toLocal(url));
  if (status !== 200) {
    fail(where, `status ${status}`);
    continue;
  }

  const titleTags = html.match(/<title>([^<]*)<\/title>/g) ?? [];
  if (titleTags.length !== 1) fail(where, `${titleTags.length} <title> tags`);
  const title = titleTags[0]?.replace(/<\/?title>/g, "");
  if (title && titles.has(title)) fail(where, `duplicate title with ${titles.get(title)}`);
  titles.set(title, where);

  const description = meta(html, "description");
  if (!description) fail(where, "missing meta description");
  else if (descriptions.has(description))
    fail(where, `duplicate description with ${descriptions.get(description)}`);
  descriptions.set(description, where);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== url) fail(where, `canonical is ${canonical}, expected ${url}`);

  for (const key of ["og:title", "og:description", "og:url", "og:image", "og:site_name", "og:type", "twitter:card", "twitter:title", "twitter:image"]) {
    if (!meta(html, key)) fail(where, `missing ${key}`);
  }
  if (meta(html, "og:url") && meta(html, "og:url") !== url)
    fail(where, `og:url is ${meta(html, "og:url")}`);
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) fail(where, "page is noindex");

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(where, `${h1s.length} <h1> elements`);

  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (ldBlocks.length === 0) fail(where, "no JSON-LD");
  for (const [, json] of ldBlocks) {
    try {
      const data = JSON.parse(json);
      if (data["@context"] !== "https://schema.org") fail(where, "JSON-LD missing @context");
    } catch (e) {
      fail(where, `invalid JSON-LD: ${e.message}`);
    }
  }

  for (const img of html.match(/<img [^>]*>/gi) ?? []) {
    if (attr(img, "alt") === undefined) fail(where, `<img> without alt: ${img.slice(0, 80)}`);
  }

  for (const [, href] of html.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) {
    internalLinks.add(href);
  }
}

for (const href of internalLinks) {
  const { status } = await get(`${BASE}${href}`);
  if (status !== 200) fail(`link ${href}`, `status ${status}`);
}

for (const asset of ["/favicon.ico", "/apple-icon.png", "/icon-192.png", "/icon-512.png", "/og-image.png", "/logo.jpg", "/manifest.webmanifest"]) {
  const { status } = await get(`${BASE}${asset}`);
  if (status !== 200) fail(asset, `status ${status}`);
}

const missing = await get(`${BASE}/this-page-does-not-exist`);
if (missing.status !== 404) fail("404 page", `status ${missing.status}`);
if (!/<meta name="robots" content="noindex/.test(missing.body)) fail("404 page", "not noindex");

console.log(`Checked ${urls.length} pages, ${internalLinks.size} internal links.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("All SEO checks passed.");
