import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { DishFeatureCard } from '@/components/dish-card'
import { ReservationCta } from '@/components/reservation-cta'
import { menu } from '@/lib/menu'

const signatures = menu.find((s) => s.id === 'signatures')!.dishes.filter((d) => d.image)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="The candlelit dining room at Axum"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
          <div className="max-w-2xl">
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Ethiopian Fine Dining
            </span>
            <h1 className="mt-6 text-balance font-serif text-6xl font-medium leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
              A taste of an ancient kingdom
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              At Axum, we serve the soul of Ethiopia — berbere-deep stews, hand-poured
              coffee ceremonies, and injera shared the way it was always meant to be.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/reservation"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-none bg-primary px-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90',
                )}
              >
                Book a Table
              </Link>
              <Link
                href="/menu"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'rounded-none border-foreground/30 bg-transparent px-8 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-foreground/10',
                )}
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage intro */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
            <Image
              src="/images/about.png"
              alt="The ancient granite obelisks of Axum, Ethiopia"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-3 border border-primary/30" />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Namesake"
              title="Named for the city where Ethiopia began"
              description="Axum was the seat of the Aksumite empire — a crossroads of trade, faith and craft, marked by towering granite stelae that still pierce the sky. Our kitchen carries that spirit: rooted, generous, and quietly monumental."
            />
            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-border/40 pt-8">
              <div>
                <p className="font-serif text-4xl text-primary">1,700+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  years of Aksumite heritage on every plate
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">14</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  spices hand-blended into our house berbere
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'mt-8 h-auto p-0 text-xs font-semibold uppercase tracking-[0.2em] text-primary',
              )}
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <SectionHeading
          eyebrow="From the Kitchen"
          title="Signature dishes"
          description="A few of the plates our guests return for, each built on the flavors of home."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {signatures.map((dish) => (
            <DishFeatureCard key={dish.name} dish={dish} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/menu"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'rounded-none border-foreground/30 bg-transparent px-8 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-foreground/10',
            )}
          >
            Explore the Full Menu
          </Link>
        </div>
      </section>

      {/* Coffee ceremony feature */}
      <section className="relative overflow-hidden border-y border-border/60">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-full">
            <Image
              src="/images/coffee-ceremony.png"
              alt="Traditional Ethiopian coffee ceremony with a clay jebena pot"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center bg-card px-6 py-20 lg:px-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Buna · The Ritual"
                title="The coffee ceremony is our love letter"
                description="Green beans are roasted at your table, ground by hand, and brewed three times in a clay jebena. Frankincense drifts over the room. It is unhurried, communal, and the truest expression of Ethiopian hospitality."
              />
              <p className="mt-8 font-serif text-2xl italic text-primary/90">
                “Buna dabo naw” — coffee is our bread.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReservationCta />
    </>
  )
}
