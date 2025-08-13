export default function CompareOptions({ state }: { state: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Compare Your Selling Options</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6 bg-card">
          <h3 className="font-semibold mb-2">List with an Agent</h3>
          <ul className="text-sm text-muted-foreground grid gap-2">
            <li>• Repairs, cleaning, and showings required</li>
            <li>• Uncertain timeline; average 60–90+ days to close</li>
            <li>• 5–6% commissions + closing costs</li>
            <li>• Appraisals and potential buyer financing delays</li>
          </ul>
        </div>
        <div className="rounded-xl border p-6 bg-card">
          <h3 className="font-semibold mb-2">Sell to BuyHouseFast</h3>
          <ul className="text-sm text-muted-foreground grid gap-2">
            <li>• No repairs, cleaning, or showings</li>
            <li>• Choose your close date — as fast as 7 days</li>
            <li>• No agent commissions; straightforward offer</li>
            <li>• Local expertise in {state}; competitive cash offer</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 