import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { loadEnv } from 'vite';

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function getCspValue(vercelConfig) {
  const rootHeaders = vercelConfig.headers?.find((entry) => entry.source === '/(.*)');
  return rootHeaders?.headers?.find((header) => header.key === 'Content-Security-Policy')?.value ?? '';
}

const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
const accessKey = env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

if (!accessKey || accessKey === 'your_key_here') {
  throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY. Add the real key to your production environment before building.');
}

const indexHtml = readFileSync('index.html', 'utf8');
const ldJsonMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

if (!ldJsonMatch) {
  throw new Error('Unable to find the inline JSON-LD script in index.html.');
}

const normalizedJsonLd = ldJsonMatch[1].replace(/\r\n/g, '\n');
const jsonLdHash = createHash('sha256').update(normalizedJsonLd, 'utf8').digest('base64');
const expectedHashToken = `'sha256-${jsonLdHash}'`;
const cspValue = getCspValue(readJson('vercel.json'));

if (!cspValue.includes(expectedHashToken)) {
  throw new Error(`Content-Security-Policy is missing ${expectedHashToken} for the inline JSON-LD block.`);
}

console.log('Validated production env and CSP hash.');
