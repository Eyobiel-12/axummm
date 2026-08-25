import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ReservationCta } from '@/components/reservation-cta'

export const metadata: Metadata = {
  title: 'About — Axum',
  description:
    'The story of Axum — an Ethiopian restaurant honoring the heritage of the ancient Aksumite kingdom through food, coffee, and hospitality.',
}

const values = [
  {
    title: 'Heritage on the plate',
    body: 'Our recipes travel straight from family kitchens in Tigray and Addis Ababa — nothing simplified, nothing diluted.',
  },
  {
    title: 'Spice, made by hand',
    body: 'Berbere, mitmita and niter kibbeh are blended and clarified in-house, the slow way, every single week.',
  },
  {
    title: 'The table is sacred',
    body: 'We serve family-style on shared injera because a meal at Axum is meant to bring people closer together.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Rooted in the oldest name in Ethiopia"
        description="Axum is more than a restaurant. It is a tribute to a civilization, a family, and a way of eating that has endured for centuries."
        image="/images/about.png"
        imageAlt="The ancient obelisks of Axum at golden hour"
      />

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
        <SectionHeading
          eyebrow="Since 2014"
          title="A family kitchen, a kingdom's memory"
        />
        <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Axum was founded by the Tesfaye family, who left the highlands of northern
            Ethiopia carrying little more than recipes and the memory of home. They named
            their restaurant after the ancient city of Axum — once the heart of the
            Aksumite empire, where obelisks of granite rose toward the heavens and trade
            routes stitched together three continents.
          </p>
          <p>
            That sense of grandeur, grounded in humility, is what we chase in every
            service. Our injera is fermented for days. Our berbere is toasted until the
            whole kitchen glows red. And our coffee is roasted at your table, because some
            things should never be rushed.
          </p>
          <p>
            Whether it is your first taste of doro wat or a flavor you have missed for
            years, we hope Axum feels like coming home.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl gap-px bg-border/40 px-6 py-0 md:grid-cols-3 lg:px-10">
          {values.map((value) => (
            <div key={value.title} className="bg-card px-6 py-14 text-center md:px-8">
              <h3 className="font-serif text-2xl font-medium text-foreground">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coffee split */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Hospitality"
              title="Every guest leaves as family"
              description="In Ethiopian culture, a guest is a blessing. We greet you with coffee and send you off full — because feeding people well is the highest honor we know."
            />
            <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-2xl italic leading-snug text-foreground">
              “To share injera with someone is to promise you will never let them go
              hungry.”
              <footer className="mt-3 font-sans text-sm not-italic tracking-wide text-muted-foreground">
                — Almaz Tesfaye, Founder
              </footer>
            </blockquote>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/coffee-ceremony.png"
              alt="An Ethiopian coffee ceremony in progress"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-3 border border-primary/30" />
          </div>
        </div>
      </section>

      <ReservationCta />
    </>
  )
}
