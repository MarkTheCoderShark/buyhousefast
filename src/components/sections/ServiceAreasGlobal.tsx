import Link from "next/link";

export default function ServiceAreasGlobal() {
  const ca = ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Sacramento", "Fresno"];
  const wa = ["Seattle", "Tacoma", "Spokane", "Bellevue", "Everett", "Vancouver"];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Where We Buy Houses</h2>
      <p className="text-center text-muted-foreground mt-2">We serve homeowners throughout California and Washington.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">California</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {ca.map((c) => (
              <Link key={c} href="/california#lead-form" className="rounded-xl border p-3 hover:bg-accent transition text-center">{c}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Washington</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {wa.map((c) => (
              <Link key={c} href="/washington#lead-form" className="rounded-xl border p-3 hover:bg-accent transition text-center">{c}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 