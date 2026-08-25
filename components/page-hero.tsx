import Image from 'next/image'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden border-b border-border/60 bg-card py-20">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>
      )}
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
