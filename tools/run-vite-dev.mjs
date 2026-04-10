import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const withWeb3Forms = args.includes('--with-web3forms');
const portFlagIndex = args.indexOf('--port');
const port = portFlagIndex >= 0 ? args[portFlagIndex + 1] : '4173';
const env = { ...process.env };
const viteEntry = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url));

if (withWeb3Forms) {
  env.VITE_WEB3FORMS_ACCESS_KEY = env.VITE_WEB3FORMS_ACCESS_KEY || 'test_access_key';
} else {
  delete env.VITE_WEB3FORMS_ACCESS_KEY;
}

const child = spawn(process.execPath, [viteEntry, '--host', '127.0.0.1', '--port', port], {
  stdio: 'inherit',
  env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
