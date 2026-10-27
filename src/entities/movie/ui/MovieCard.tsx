import { useState } from 'react'
import { TMDB_IMAGE_URLS } from '@/shared/config'
import { MOVIE_MESSAGES } from '../config/messages'
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
  const [failedImagePath, setFailedImagePath] = useState<string | null>(null)

  const backdropUrl =
    imagePath && imagePath !== failedImagePath
      ? `${TMDB_IMAGE_URLS.w780}${imagePath}`
      : null

  const currentMedia = media === 'movie' ? 'Фильм' : 'Сериал'
  const visibleGenres = genres.slice(0, 2).map((genre, index) => {
    const name = genre.toLowerCase()
    return index === 0 ? name.charAt(0).toUpperCase() + name.slice(1) : name
  })

  return (
    <article className={styles.card}>
      {backdropUrl ? (
        <img
          src={backdropUrl}
          className={styles.poster}
          alt=""
          loading="lazy"
          onError={() => setFailedImagePath(imagePath)}
        />
      ) : (
        <div className={`${styles.poster} ${styles.placeholder}`}>
          {MOVIE_MESSAGES.noImage}
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
          {visibleGenres.length > 0 && (
            <>
              <span aria-hidden="true"> • </span>
              <span>{visibleGenres.join(', ')}</span>
            </>
          )}
        </p>
        <p className={styles.title} title={title}>
          {title}
        </p>
      </div>
    </article>
  )
}
