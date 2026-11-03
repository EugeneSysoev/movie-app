import styles from './MovieFacts.module.css'

interface MovieFactsProps {
  rating?: number
  genres: string[]
  countries: string[]
  duration?: string
  directors: string
  actors: string
}

export function MovieFacts({
  rating,
  genres,
  countries,
  duration,
  directors,
  actors,
}: MovieFactsProps) {
  const rows = [
    {
      label: 'Рейтинг TMDB:',
      value: rating?.toFixed(1) ?? 'Рейтинг отсутствует',
      valueClassName: styles.rating,
    },
    { label: 'Жанр:', value: genres.join(', ') || 'Жанры не указаны' },
    { label: 'Режиссёр:', value: directors },
    { label: 'Актёрский состав:', value: actors },
    { label: 'Страна:', value: countries.join(', ') || 'Страны не указаны' },
    { label: 'Время:', value: duration ?? 'Длительность не указана' },
    {
      label: 'Аудиодорожки:',
      value: 'Русский, английский',
      title: 'Демонстрационная заглушка',
    },
    {
      label: 'Субтитры:',
      value: 'Русские, английские',
      title: 'Демонстрационная заглушка',
    },
  ]

  return (
    <dl className={styles.facts}>
      {rows.map((row) => (
        <div className={styles.row} key={row.label}>
          <dt className={styles.label}>{row.label}</dt>
          <dd
            className={row.valueClassName ?? styles.value}
            title={row.title}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
