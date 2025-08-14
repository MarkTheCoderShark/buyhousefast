import Link from "next/link";

export default function SEOContentGlobal() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
        <div className="prose prose-slate max-w-none dark:prose-invert">
          <h2>Sell Your House Fast — A Better Way to Sell</h2>
          <p>
            If you’re searching for phrases like “sell your house fast,” “we buy houses,” or “cash home
            buyers,” you’re likely weighing your options between listing with an agent and selling
            directly. We help homeowners in <Link href="/california">California</Link> and
            <Link href="/washington"> Washington</Link> get fair, no-obligation cash offers and close on
            their timeline — often in as little as 7–14 days.
          </p>

          <h3>Who we help</h3>
          <ul>
            <li>Inherited or probate properties</li>
            <li>Relocation, downsizing, or job change</li>
            <li>Vacant homes or major repairs needed</li>
            <li>Pre-foreclosure or behind on payments</li>
            <li>Landlords with tenant or vacancy challenges</li>
          </ul>

          <h3>How it works</h3>
          <ol>
            <li>Tell us about the property and your goals</li>
            <li>Receive a competitive cash offer with no commissions</li>
            <li>Pick the closing date that works best for you</li>
          </ol>

          <p>
            Prefer to start with a state-specific page? Visit our
            <Link href="/california"> California</Link> or<Link href="/washington"> Washington</Link>
            pages for tailored information and a pre-filled offer form.
          </p>
        </div>
      </div>
    </section>
  );
} 