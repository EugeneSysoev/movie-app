const FALLBACK_DATE_TEXT = 'Дата уточняется'

const releaseDateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
})

export function formatReleaseDate(dateString?: string): string {
  if (!dateString?.trim()) {
    return FALLBACK_DATE_TEXT
  }

  const date = new Date(dateString)

  if (Number.isNaN(date.getTime())) {
    return FALLBACK_DATE_TEXT
  }

  return releaseDateFormatter.format(date)
}
