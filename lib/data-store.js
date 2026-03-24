import fs from 'fs';
import path from 'path';
import { churches as initialChurches } from './churches';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

function ensureDataDir() {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

export function getChurches() {
  ensureDataDir();
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(initialChurches, null, 2));
    return initialChurches;
  }
  const data = fs.readFileSync(DB_PATH, 'utf8');
  return JSON.parse(data);
}

export function saveChurch(church) {
  const churches = getChurches();
  const newChurch = {
    ...church,
    id: `church-${Date.now()}`,
    slug: `${church.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
    created_at: new Date().toISOString(),
    approved: true, // For demo purposes, we auto-approve
  };
  churches.push(newChurch);
  fs.writeFileSync(DB_PATH, JSON.stringify(churches, null, 2));
  return newChurch;
}
