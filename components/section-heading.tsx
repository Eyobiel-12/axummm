import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  subtitle?: string
  align?: 'left' | 'center'
  centered?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  subtitle,
  align = 'center',
  centered,
  className,
}: SectionHeadingProps) {
  const isCentered = centered !== undefined ? centered : align === 'center'
  const desc = description || subtitle

  return (
    <div
      className={cn(
        'space-y-3',
        isCentered ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {desc}
        </p>
      )}
    </div>
  )
}
