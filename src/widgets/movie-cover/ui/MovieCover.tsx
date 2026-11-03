import styles from './MovieCover.module.css'
import { Container } from '@/shared/ui/container'
import { MovieImage } from '@/entities/movie'
import { Button } from '@/shared/ui/button'
import { IconButton } from '@/shared/ui/icon-button'
import FavoritesIcon from '../assets/Favorites.svg'
import PlayIcon from '../assets/Play.svg'
import PlusIcon from '../assets/Plus.svg'
import { WatchTrailer } from '@/features/watch-trailer'

interface MovieCoverProps {
  title: string
  backdropPath: string | null
  rating?: number
  year?: string
  genres: string[]
  countries: string[]
  duration?: string
  movieId: number
}

export const MovieCover = (props: MovieCoverProps) => {
  const {
    title,
    backdropPath,
    rating,
    year,
    genres,
    countries,
    duration,
    movieId
  } = props

  return (
    <section className={styles.cover}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.metadata}>
            <span className={styles.rating}>
              {rating?.toFixed(1) ?? 'Рейтинг отсутствует'}
            </span>
            <span aria-hidden="true"> • </span>
            <span>
              {year ?? 'Год не указан'},{' '}
              {genres.length > 0 ? genres.join(', ') : 'Жанры не указаны'}
            </span>
            <span aria-hidden="true"> • </span>
            <span>
              {countries.length > 0
                ? countries.join(', ')
                : 'Страны не указаны'}
            </span>
            <span aria-hidden="true"> • </span>
            <span>{duration ?? 'Длительность не указана'}</span>
          </p>

          <div className={styles.buttonsRow}>
            <Button
              className={styles.button}
              title="Просмотр пока что недоступен"
              type="button"
              disabled
            >
              Смотреть фильм
              <img src={PlayIcon} alt="" width={18} height={18} />
            </Button>

            <WatchTrailer key={movieId} movieId={movieId} movieTitle={title} />

            <IconButton type="button" disabled aria-label="Добавить в плейлист">
              <img src={PlusIcon} alt="" width={60} height={55} />
            </IconButton>

            <IconButton
              type="button"
              disabled
              aria-label="Добавить в избранное"
            >
              <img src={FavoritesIcon} alt="" width={57} height={55} />
            </IconButton>
          </div>
        </div>
      </Container>

      <div className={styles.backdrop}>
        <MovieImage
          imagePath={backdropPath}
          size="w1280"
          className={styles.image}
          loading="eager"
        />
      </div>
    </section>
  )
}
