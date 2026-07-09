import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const rootDirectory = resolve(import.meta.dirname, '..');
const distDirectory = resolve(rootDirectory, 'dist');
const indexPath = resolve(distDirectory, 'index.html');
const fallbackPath = resolve(distDirectory, '404.html');

if (existsSync(indexPath)) {
  copyFileSync(indexPath, fallbackPath);
}
