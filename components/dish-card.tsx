import Image from 'next/image'
import type { Dish } from '@/lib/menu'

export function DishRow({ dish }: { dish: Dish }) {
  return (
    <article className="group flex items-baseline gap-4 border-b border-border/40 py-6 last:border-0" aria-label={`${dish.name}, $${dish.price}`}>
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-2xl font-medium text-foreground">{dish.name}</h3>
          {dish.amharic && <span className="font-serif text-lg text-primary/80">{dish.amharic}</span>}
          {dish.tags?.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
      </div>
      <div className="hidden flex-1 border-b border-dotted border-border/60 sm:block" aria-hidden="true" />
      <span className="font-serif text-xl text-foreground" aria-label={`Price $${dish.price}`}>${dish.price}</span>
    </article>
  )
}

export function DishFeatureCard({ dish }: { dish: Dish }) {
  return (
    <article className="group overflow-hidden border border-border/60 bg-card transition-colors hover:border-primary/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        {dish.image && (
          <Image src={dish.image} alt={`${dish.name} Ethiopian dish`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl font-medium text-foreground">{dish.name}</h3>
          <span className="font-serif text-xl text-primary">${dish.price}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
      </div>
    </article>
  )
}
