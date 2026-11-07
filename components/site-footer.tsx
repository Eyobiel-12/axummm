import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'
import { OPENING_HOURS, formatHours } from '@/lib/hours'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.49-1.46H17V3.96c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.04V10H8v3h2.71v8h2.79Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="font-serif text-3xl font-semibold tracking-[0.35em] text-foreground">
              AXUM
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ethiopian fine dining inspired by the ancient Aksumite kingdom — where
              heritage, spice, and hospitality meet.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                aria-label="Axum on Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Axum on Facebook"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="transition-colors hover:text-foreground">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="transition-colors hover:text-foreground"
                >
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Visit
            </h3>
            <a
              href="https://aksumrestaurant.nl"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm text-muted-foreground underline decoration-primary/50 underline-offset-4 hover:text-foreground"
            >
              aksumrestaurant.nl
            </a>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://www.google.com/maps/place/Axum+Restaurant/@52.3566861,4.9099334,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  Blasiusstraat 62
                  <br />
                  1091 CV Amsterdam, Netherlands
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+31206633963" className="hover:text-foreground">
                  +31 20 663 3963
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Hours
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="w-full max-w-60 space-y-1">
                  {OPENING_HOURS.map((d) => (
                    <p key={d.name} className="flex justify-between gap-6">
                      <span>{d.name}</span>
                      <span className={d.open ? 'text-foreground' : ''}>{formatHours(d)}</span>
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p suppressHydrationWarning>© 2026 Axum Restaurant. All rights reserved.</p>
          <p className="tracking-wide">Crafted with reverence for Ethiopian heritage.</p>
        </div>
      </div>
    </footer>
  )
}
