import type { ReactNode } from 'react'
import { Container } from '@/shared/ui/container'
import { MovieFacts } from './MovieFacts'
import { Feedback } from '@/shared/ui/feedback'
import styles from './MovieAbout.module.css'

interface MovieAboutProps {
  children: ReactNode
  overview: string
  rating?: number
  genres: string[]
  countries: string[]
  duration?: string
  actors: string[]
  directors: string[]
  isError: boolean
  isFetching: boolean
  onRetry: () => void
}

export function MovieAbout(props: MovieAboutProps) {
  const {
    children,
    overview,
    rating,
    genres,
    countries,
    duration,
    actors,
    directors,
    isError,
    isFetching,
    onRetry
  } = props

  return (
    <section className={styles.about} aria-labelledby="movie-about-title">
      <Container className={styles.layout}>
        <h2 className={styles.title} id="movie-about-title">
          О фильме
        </h2>
        <div className={styles.mainColumn}>
          <p className={styles.description}>{overview}</p>
          {children}
        </div>
        <div className={styles.credits} aria-busy={isFetching}>
          <MovieFacts
            rating={rating}
            genres={genres}
            countries={countries}
            duration={duration}
            directors={directors.join(', ') || 'Режиссёр не указан'}
            actors={actors.join(', ') || 'Имена актёров на русском недоступны'}
          />

          {isError && (
            <Feedback
              isFetching={isFetching}
              onRetry={onRetry}
            />
          )}
        </div>
      </Container>
    </section>
  )
}
