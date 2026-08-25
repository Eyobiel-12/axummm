import type { Metadata } from 'next'
import { MapPin, Phone, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ReservationForm } from '@/components/reservation-form'

export const metadata: Metadata = {
  title: 'Reservations — Axum',
  description:
    'Reserve your table at Axum in Amsterdam. Experience Ethiopian fine dining, traditional coffee ceremonies, and warm hospitality.',
}

export default function ReservationPage() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Join Our Table"
        title="Reserve an Evening at Axum"
        description="We welcome you to slow down, share injera, and experience the warmth of Ethiopian hospitality."
        image="/images/reservation.png"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ReservationForm />
            </div>

            <div className="space-y-8 lg:col-span-5">
              <div className="border border-border/60 bg-card p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  Dining Notes
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Parties of 1–12:</strong> Please reserve online. For
                      larger gatherings or private dining, please call us directly.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Dietary Needs:</strong> We gladly accommodate vegan,
                      vegetarian, gluten-free (teff injera), and halal preferences.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Coffee Ceremony:</strong> Traditional coffee ceremonies
                      are prepared fresh tableside for the whole table.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border border-border/60 bg-card p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  Location & Contact
                </h3>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Axum Restaurant</p>
                      <p>Blasiusstraat 62</p>
                      <p>1091 CV Amsterdam, Netherlands</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href="tel:+31206633963" className="hover:text-foreground">
                      +31 20 663 3963
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p>Thursday · 5:00 PM – 11:30 PM</p>
                      <p className="text-xs">Check Google Maps for today&apos;s hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
