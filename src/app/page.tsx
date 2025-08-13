import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold">Sell Your House Fast — Get a Cash Offer</h1>
        <p className="text-muted-foreground mt-3">Choose your state to see a tailored page and get a fair cash offer in 24 hours.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/california" className="rounded-xl border p-6 hover:bg-accent transition">California</Link>
        <Link href="/washington" className="rounded-xl border p-6 hover:bg-accent transition">Washington</Link>
      </div>
    </div>
  );
}
