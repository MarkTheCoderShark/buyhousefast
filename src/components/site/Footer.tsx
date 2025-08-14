import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-semibold text-lg">SellHouseFast</div>
          <p className="text-sm text-muted-foreground">We buy houses for cash in any condition. Fast, fair, and hassle-free.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+18005551234">(800) 555-1234</a></li>
            <li><a href="mailto:offers@sellhousefast.com">offers@sellhousefast.com</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/california">California</Link></li>
            <li><Link href="/washington">Washington</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} SellHouseFast. All rights reserved.</div>
    </footer>
  );
} 