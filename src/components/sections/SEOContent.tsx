import Link from "next/link";

export default function SEOContent({ state }: { state: "California" | "Washington" }) {
  const phrase1 = `sell your house fast in ${state}`;
  const phrase2 = `cash home buyers in ${state}`;
  const phrase3 = `we buy houses in ${state}`;

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
        <div className="prose prose-invert max-w-none">
          <h2>Need to {phrase1}? Here’s how we help.</h2>
          <p>
            If you’re looking to {phrase1}, you’re in the right place. We are trusted {phrase2} who
            make fair, no-obligation offers on properties in any condition. Whether you’re facing a
            job relocation, inheriting a home, dealing with vacancy or costly repairs, or simply want
            a quick and certain sale, our streamlined process removes stress and delays.
          </p>

          <h3>What makes our offer different?</h3>
          <p>
            Traditional listings can take months and often require cleaning, staging, repairs, and open
            houses. As direct buyers, we provide speed and certainty: no agent commissions, no repairs,
            and flexible closing timelines. Our local market knowledge in {state} means you’ll receive
            a competitive cash offer that reflects real neighborhood trends.
          </p>

          <h3>When speed and certainty matter</h3>
          <ul>
            <li>Inherited or probate properties</li>
            <li>Pre-foreclosure or behind on payments</li>
            <li>Relocation or job change</li>
            <li>Downsizing or rightsizing</li>
            <li>Major repairs, fire/water damage, or long-term vacancy</li>
          </ul>

          <h3>Simple steps to your cash offer</h3>
          <ol>
            <li>Tell us about the property — address, condition, timing, and goals</li>
            <li>Receive a fair, no-obligation cash offer typically within 24 hours</li>
            <li>Pick the closing date that works for you — as fast as 7 days</li>
          </ol>

          <p>
            We’re easy to reach and happy to answer questions about your specific situation. Start on
            the <Link href={`/${state.toLowerCase()}`}>{state} page</Link> or head to our
            <Link href="#lead-form"> secure form</Link> to request your cash offer now.
          </p>

          <h3>Related terms we support</h3>
          <p>
            People search for terms like “{phrase3},” “{phrase1},” and “{phrase2}.” Our service is
            designed for all of these needs: quick, transparent, and tailored to your timeline.
          </p>
        </div>
      </div>
    </section>
  );
} 