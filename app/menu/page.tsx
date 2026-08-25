import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { MenuBrowser } from '@/components/menu-browser'
import { ReservationCta } from '@/components/reservation-cta'
import { menu } from '@/lib/menu'

export const metadata: Metadata = {
  title: 'Menu — Axum',
  description:
    'Explore the Axum menu — beginnings, signature Ethiopian dishes, and the traditional coffee ceremony.',
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Dishes worth gathering for"
        description="Everything is made to share. Tear the injera, reach across the table, and taste Ethiopia one wat at a time."
        image="/images/dish-beyaynetu.png"
        imageAlt="A colorful Ethiopian injera platter"
      />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <MenuBrowser sections={menu} />

        <p className="mt-16 text-center text-sm leading-relaxed text-muted-foreground">
          Dishes can be prepared vegan or gluten-free on request. Please tell us about
          any allergies — our kitchen is happy to guide you.
        </p>
      </div>

      <ReservationCta />
    </>
  )
}
