// Opening hours, matching the Google Maps listing.
// `day` uses JavaScript's Date#getDay() numbering (0 = Sunday).
export type OpeningDay = {
  day: number
  name: string
  schemaDay: string
  open: string | null
  close: string | null
}

export const OPENING_HOURS: OpeningDay[] = [
  { day: 1, name: 'Monday', schemaDay: 'Monday', open: null, close: null },
  { day: 2, name: 'Tuesday', schemaDay: 'Tuesday', open: '17:00', close: '22:00' },
  { day: 3, name: 'Wednesday', schemaDay: 'Wednesday', open: '17:00', close: '22:00' },
  { day: 4, name: 'Thursday', schemaDay: 'Thursday', open: '17:00', close: '23:30' },
  { day: 5, name: 'Friday', schemaDay: 'Friday', open: '17:00', close: '23:30' },
  { day: 6, name: 'Saturday', schemaDay: 'Saturday', open: '17:00', close: '23:30' },
  { day: 0, name: 'Sunday', schemaDay: 'Sunday', open: '17:00', close: '22:00' },
]

export const formatHours = (d: OpeningDay) =>
  d.open && d.close ? `${d.open} – ${d.close}` : 'Closed'

export const isClosedOn = (dateString: string) => {
  if (!dateString) return false
  const weekday = new Date(`${dateString}T00:00:00`).getDay()
  const entry = OPENING_HOURS.find((d) => d.day === weekday)
  return !entry?.open
}

export const openingHoursSchema = OPENING_HOURS.filter((d) => d.open).map(
  (d) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${d.schemaDay}`,
    opens: d.open,
    closes: d.close,
  }),
)
