import Link from "next/link";

export default function ServiceAreas({ state }: { state: "California" | "Washington" }) {
  const areas = state === "California"
    ? ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Sacramento", "Fresno"]
    : ["Seattle", "Tacoma", "Spokane", "Bellevue", "Everett", "Vancouver"];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Where We Buy Houses in {state}</h2>
      <p className="text-muted-foreground text-center mt-2">We serve homeowners across major metros and surrounding areas.</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {areas.map((city) => (
          <Link key={city} href={`/${state.toLowerCase()}#lead-form`} className="rounded-xl border p-4 text-center hover:bg-accent transition">
            {city}
          </Link>
        ))}
      </div>
    </section>
  );
} 