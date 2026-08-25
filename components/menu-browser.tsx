'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { DishRow } from '@/components/dish-card'
import type { MenuSection } from '@/lib/menu'
import { cn } from '@/lib/utils'

const filters = ['All', 'Vegan', 'Vegetarian', 'Signature', 'Spicy'] as const
type Filter = (typeof filters)[number]

export function MenuBrowser({ sections }: { sections: MenuSection[] }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('All')
  
  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return sections
      .map((section) => ({
        ...section,
        dishes: section.dishes.filter((dish) => {
          const matchesQuery =
            !normalizedQuery ||
            [dish.name, dish.description, dish.amharic]
              .filter(Boolean)
              .join(' ')
              .toLowerCase()
              .includes(normalizedQuery)
          const matchesFilter =
            filter === 'All' ||
            dish.tags?.some((tag) =>
              tag.toLowerCase().includes(filter.toLowerCase()),
            )
          return matchesQuery && matchesFilter
        }),
      }))
      .filter((section) => section.dishes.length > 0)
  }, [filter, query, sections])
  
  const hasFilters = query.length > 0 || filter !== 'All'

  return (
    <div>
      <div className="sticky top-20 z-20 mb-16 border-y border-border/60 bg-background/95 py-4 backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="menu-search" className="sr-only">
              Search the menu
            </label>
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dishes"
              className="h-11 w-full rounded-none border border-border/70 bg-card pl-10 pr-10 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear menu search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1"
            aria-label="Filter menu dishes"
          >
            <SlidersHorizontal
              className="mr-1 h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  'min-h-11 shrink-0 border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  filter === item
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border/70 text-muted-foreground hover:border-primary hover:text-primary',
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      {filteredSections.length > 0 ? (
        <div className="space-y-20">
          {filteredSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  {section.subtitle}
                </p>
                <h2 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-5xl">
                  {section.title}
                </h2>
                <span
                  className="mt-5 h-px w-16 bg-primary/50"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-10">
                {section.dishes.map((dish) => (
                  <DishRow key={dish.name} dish={dish} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-border/70 px-6 py-16 text-center">
          <p className="font-serif text-2xl text-foreground">No dishes found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try another search or clear your filters.
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setFilter('All')
              }}
              className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary underline underline-offset-4"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}
