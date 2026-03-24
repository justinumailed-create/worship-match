import { ContactForm } from "@/components/contact-form";
import { getChurchBySlug } from "@/lib/churches";

export const metadata = {
  title: "Contact a Church"
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const church = params.church ? getChurchBySlug(String(params.church)) : null;
  const intent = params.intent ? String(params.intent) : "";
  const initialMessage =
    intent === "request-visit" && church
      ? `Hi ${church.name}, I would love to request a visit and learn what to expect on my first Sunday.`
      : intent === "message-church" && church
        ? `Hi ${church.name}, I’m interested in learning more about your church and next steps to get connected.`
        : church
          ? `Hi ${church.name}, I'd love to learn more and plan a visit.`
          : "I'd like help finding the right church fit.";

  return (
    <div className="mx-auto max-w-6xl px-5 pb-8 pt-10 lg:px-8">
      <section className="mb-10 max-w-4xl">
        <div className="inline-flex rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--sage-700)]">
          Step 3 • Reach out
        </div>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl">
          Contact the Church
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-700)]">
          Send a message, request a visit, and create a lead the church can respond to.
        </p>
      </section>

      <ContactForm church={church} initialMessage={initialMessage} />
    </div>
  );
}
