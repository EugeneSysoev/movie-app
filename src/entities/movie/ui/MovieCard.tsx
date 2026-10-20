import styles from './MovieCard.module.css'

interface MovieCardProps {
  title: string
  imagePath: string | null
  media: 'movie' | 'tv'
  rating?: number
  genres?: string[]
}

export function MovieCard(props: MovieCardProps) {
  const { title, imagePath, rating, genres = [], media } = props

  const backdropUrl = imagePath
    ? `https://image.tmdb.org/t/p/w780${imagePath}`
    : null

  const currentMedia = media === 'movie' ? 'Фильм' : 'Сериал'

  return (
    <article className={styles.card}>
      {backdropUrl ? (
        <img
          src={backdropUrl}
          className={styles.poster}
          alt=""
          loading="lazy"
        />
      ) : (
        <div className={`${styles.poster} ${styles.placeholder}`}>
          Нет изображения
        </div>
      )}

      <div className={styles.content}>
        <p className={styles.metadata}>
          {rating !== undefined && rating > 0 && (
            <>
              <span
                className={styles.rating}
                aria-label={`Рейтинг ${rating.toFixed(1)} из 10`}
              >
                {rating.toFixed(1)}
              </span>
              <span aria-hidden="true"> • </span>
            </>
          )}
          <span>{currentMedia}</span>
          {genres.length > 0 && (
            <>
              <span aria-hidden="true"> • </span>
              <span>{genres.join(', ')}</span>
            </>
          )}
        </p>
        <p className={styles.title}>{title}</p>
      </div>
    </article>
  )
}
