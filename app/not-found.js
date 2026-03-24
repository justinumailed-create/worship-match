import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
      <div className="inline-flex rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--sage-700)]">
        Page not found
      </div>
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl">
        That church page is not public
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--ink-700)]">
        The listing may still be pending approval, or the page may not exist yet. Only approved churches appear
        in the public platform.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/find-my-church"
          className="rounded-full bg-[var(--ink-900)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--sage-700)]"
        >
          Find My Church
        </Link>
        <Link
          href="/churches"
          className="rounded-full border border-[rgba(21,35,33,0.12)] bg-white px-6 py-3 text-base font-semibold text-[var(--ink-900)] transition hover:bg-[var(--sand-50)]"
        >
          Browse Directory
        </Link>
      </div>
    </div>
  );
}
