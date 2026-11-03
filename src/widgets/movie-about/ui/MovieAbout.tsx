import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'
import { useMovieCredits } from '@/shared/api/generated/endpoints'
import { getMovieActors, getMovieDirectors } from '../model/movieCredits'
import { MovieFacts } from './MovieFacts'
import styles from './MovieAbout.module.css'

interface MovieAboutProps {
  overview: string
  movieId: number
  rating?: number
  genres: string[]
  countries: string[]
  duration?: string
}

export function MovieAbout({
  overview,
  movieId,
  rating,
  genres,
  countries,
  duration,
}: MovieAboutProps) {
  const { data, isPending, isError, refetch } = useMovieCredits(movieId, {
    language: 'ru-RU',
  })

  let creditsMessage = ''
  let creditsFeedback

  if (isPending) {
    creditsMessage = 'Загружаем…'
    creditsFeedback = <p role="status">Загружаем состав фильма…</p>
  } else if (isError) {
    creditsMessage = 'Не удалось загрузить'
    creditsFeedback = (
      <div className={styles.error}>
        <p role="alert">Не удалось загрузить состав фильма.</p>
        <Button variant="outline" onClick={() => void refetch()}>
          Повторить запрос
        </Button>
      </div>
    )
  }

  return (
    <section className={styles.about} aria-labelledby="movie-about-title">
      <Container className={styles.layout}>
        <h2 className={styles.title} id="movie-about-title">
          О фильме
        </h2>
        <p className={styles.description}>{overview}</p>
        <div className={styles.credits} aria-busy={isPending}>
          <MovieFacts
            rating={rating}
            genres={genres}
            countries={countries}
            duration={duration}
            directors={
              creditsMessage ||
              getMovieDirectors(data?.crew).join(', ') ||
              'Режиссёр не указан'
            }
            actors={
              creditsMessage ||
              getMovieActors(data?.cast).join(', ') ||
              'Имена актёров на русском недоступны'
            }
          />
          {creditsFeedback}
        </div>
      </Container>
    </section>
  )
}
