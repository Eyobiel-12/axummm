'use client'

import { useState } from 'react'
import { Check, Loader2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { isClosedOn } from '@/lib/hours'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

const times = [
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
]

// Add fully booked dates here as 'YYYY-MM-DD'.
const BLOCKED_RESERVATION_DATES: string[] = []

const formatBlockedDate = (dateString: string) => {
  const date = new Date(`${dateString}T00:00:00`)

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

const isBlockedDate = (dateString: string) =>
  BLOCKED_RESERVATION_DATES.includes(dateString)

const dateError = (dateString: string) => {
  if (isClosedOn(dateString))
    return 'We are closed on Mondays. Please choose another date.'
  if (isBlockedDate(dateString))
    return `Reservations are unavailable on ${formatBlockedDate(dateString)}. Please choose another date.`
  return null
}

const fieldClass =
  'w-full rounded-none border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary'

const labelClass =
  'mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '7:00 PM',
    guests: '2 guests',
    notes: '',
  })

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const invalidDate = dateError(form.date)
    if (invalidDate) {
      setError(invalidDate)
      return
    }

    setLoading(true)

    const templateParams = {
      name: form.name,
      user_name: form.name,
      from_name: form.name,
      to_name: 'Axum Restaurant',

      email: form.email,
      user_email: form.email,
      from_email: form.email,
      reply_to: form.email,

      phone: form.phone,
      user_phone: form.phone,

      date: form.date,
      reservation_date: form.date,

      time: form.time,
      reservation_time: form.time,

      guests: form.guests,
      number_of_guests: form.guests,

      notes: form.notes || 'None',
      special_requests: form.notes || 'None',
      message: `Reservation Request from ${form.name}:\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nPhone: ${form.phone}\nEmail: ${form.email}\nSpecial Requests: ${form.notes || 'None'}`,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
    } catch (err: unknown) {
      console.error('EmailJS reservation error:', err)
      setError(
        'Unable to send your reservation request right now. Please try again or call us directly at +31 20 663 3963.',
      )
    } finally {
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 border border-primary/40 bg-card px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary text-primary">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-3xl font-medium text-foreground">
          Your table has been requested
        </h3>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Thank you, {form.name.split(' ')[0] || 'friend'}. We&apos;ve sent your
          request for <strong>{form.guests}</strong> on{' '}
          <strong>{form.date || 'your chosen date'}</strong> at{' '}
          <strong>{form.time}</strong> to our restaurant team.
          We will confirm your booking via email at <strong>{form.email}</strong> shortly.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false)
            setForm({
              name: '',
              email: '',
              phone: '',
              date: '',
              time: '7:00 PM',
              guests: '2 guests',
              notes: '',
            })
          }}
          variant="outline"
          className="rounded-none border-foreground/30 bg-transparent text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-foreground/10"
        >
          Make Another Reservation
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border/60 bg-card p-6 sm:p-10"
    >
      {error && (
        <div className="mb-6 flex items-start gap-3 border border-destructive/50 bg-destructive/10 p-4 text-sm text-foreground">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Almaz Tesfaye"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+31 20 663 3963"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="date" className={labelClass}>
            Date
          </label>
          <input
            id="date"
            type="date"
            required
            suppressHydrationWarning
            min={today}
            value={form.date}
            onChange={(e) => {
              const selectedDate = e.target.value

              const invalidDate = dateError(selectedDate)
              if (invalidDate) {
                setError(invalidDate)
                update('date', '')
                return
              }

              setError(null)
              update('date', selectedDate)
            }}
            className={cn(fieldClass, '[color-scheme:dark]')}
          />
        </div>

        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests
          </label>
          <select
            id="guests"
            value={form.guests}
            onChange={(e) => update('guests', e.target.value)}
            className={cn(fieldClass, 'appearance-none')}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={`${n} ${n === 1 ? 'guest' : 'guests'}`}>
                {n} {n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <span className={labelClass}>Preferred Time</span>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {times.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={form.time === t}
                onClick={() => update('time', t)}
                className={cn(
                  'border px-2 py-2.5 text-xs font-medium tracking-wide transition-colors',
                  form.time === t
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-input text-muted-foreground hover:border-primary/60 hover:text-foreground',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>
            Special Requests
          </label>
          <textarea
            id="notes"
            rows={3}
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
            placeholder="Allergies, celebrations, seating preferences…"
            className={cn(fieldClass, 'resize-none')}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-none bg-primary text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending Request...
          </>
        ) : (
          'Request Reservation'
        )}
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        For parties larger than 12, please call us at +31 20 663 3963.
      </p>
    </form>
  )
}
