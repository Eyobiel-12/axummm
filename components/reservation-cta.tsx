import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function ReservationCta() {
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center lg:px-10">
        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          Join Us
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
        </span>
        <h2 className="max-w-2xl text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
          An evening at Axum begins with a single reservation
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Gather around the mesob, break injera together, and let the coffee ceremony
          carry the night. We would be honored to host you.
        </p>
        <Link
          href="/reservation"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'rounded-none bg-primary px-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90',
          )}
        >
          Reserve a Table
        </Link>
      </div>
    </section>
  )
}
