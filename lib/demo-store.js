const globalStore = globalThis;

if (!globalStore.__churchDemoStore) {
  globalStore.__churchDemoStore = {
    leads: [],
    submissions: []
  };
}

export const demoStore = globalStore.__churchDemoStore;

export function createReference(prefix) {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
