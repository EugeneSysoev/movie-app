import { parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'

export function formatReleaseDate(dateString?: string): string {
  if (!dateString) {
    return 'Дата уточняется'
  }

  const date = parseISO(dateString)

  return format(date, 'd MMMM', { locale: ru })
}
