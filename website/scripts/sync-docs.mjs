#!/usr/bin/env node
// Copies the training docs from ../docs (the source of truth) into the site's
// docs folder, adding front matter and fixing cross-links.
// Runs automatically before `npm start` and `npm run build`.

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(here, '..');
const srcDir = path.resolve(siteDir, '..', 'docs');
const outDir = path.join(siteDir, 'docs');

const pages = [
  {
    src: 'TOD.md',
    out: 'tips.md',
    front: {
      id: 'tips',
      title: 'JMeter Tip of the Day',
      sidebar_label: '💡 Tip of the Day',
      sidebar_position: 2,
      description: 'Small, practical tips to help JMeter trainees work faster and smarter.',
    },
  },
  {
    src: 'Performance-Testing-Types.md',
    out: 'performance-testing-types.md',
    front: {
      id: 'performance-testing-types',
      title: 'Performance Testing Types',
      sidebar_label: '🧭 Performance Testing Types',
      sidebar_position: 3,
      description: 'Load, stress, spike, soak, volume, capacity, scalability, baseline and benchmark testing explained.',
    },
  },
  {
    src: 'Performance-Glossary.md',
    out: 'glossary.md',
    front: {
      id: 'glossary',
      title: 'Performance Testing Glossary',
      sidebar_label: '📖 Glossary',
      sidebar_position: 4,
      toc_max_heading_level: 2,
      description: 'A to Z glossary of performance testing terms, with JMeter 5.6.3 mapping.',
    },
  },
];

// Links between the source files, rewritten to the site's file names.
const linkMap = {
  'TOD.md': 'tips.md',
  'Performance-Testing-Types.md': 'performance-testing-types.md',
  'Performance-Glossary.md': 'glossary.md',
};

function frontMatter(obj) {
  const lines = Object.entries(obj).map(([k, v]) =>
    typeof v === 'string' ? `${k}: ${JSON.stringify(v)}` : `${k}: ${v}`,
  );
  return `---\n${lines.join('\n')}\n---\n\n`;
}

function transform(md) {
  let out = md;
  // Contributor templates live in HTML comments; keep them out of the site.
  out = out.replace(/<!--[\s\S]*?-->\n?/g, '');
  // The site has its own search box, so swap the "use Ctrl+F / open the HTML" hint.
  out = out.replace(
    /^🔎 \*\*Searching:\*\*.*$/m,
    '🔎 **Searching:** press `Ctrl + K` (`⌘ + K` on macOS) or use the search box at the top to jump straight to any term.',
  );
  for (const [from, to] of Object.entries(linkMap)) {
    out = out.replaceAll(`](${from}`, `](${to}`);
  }
  // The page title comes from front matter; drop the duplicate H1.
  out = out.replace(/^# .*\n+/, '');
  return out;
}

fs.mkdirSync(outDir, {recursive: true});
for (const page of pages) {
  const srcPath = path.join(srcDir, page.src);
  if (!fs.existsSync(srcPath)) {
    console.warn(`[sync-docs] Missing ${srcPath}, skipped.`);
    continue;
  }
  const body = transform(fs.readFileSync(srcPath, 'utf8'));
  const banner =
    '<!-- Generated from docs/' + page.src + ' by website/scripts/sync-docs.mjs. Edit the source file, not this one. -->\n\n';
  fs.writeFileSync(path.join(outDir, page.out), frontMatter(page.front) + banner + body);
  console.log(`[sync-docs] ${page.src} -> docs/${page.out}`);
}
