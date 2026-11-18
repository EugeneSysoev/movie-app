import { MovieCard } from '@/entities/movie'
import { Container } from '@/shared/ui/container'
import { Slider } from '@/shared/ui/slider'
import { Link } from 'react-router'
import type { RecommendedMovie } from '../model/recommendations'
import { Feedback } from '@/shared/ui/feedback'
import { RECOMMENDATIONS_A11Y_CONFIG } from '../config/constants'
import styles from './MovieRecommendations.module.css'

interface MovieRecommendationsProps {
  movieTitle: string
  movies: RecommendedMovie[]
  isError: boolean
  isFetching: boolean
  onRetry: () => void
}

export function MovieRecommendations(props: MovieRecommendationsProps) {
  const { isError, isFetching, movieTitle, movies, onRetry } = props

  return (
    <section
      className={styles.recommendations}
      aria-labelledby="recommendations-title"
    >
      <Container>
        <h2 className={styles.title} id="recommendations-title">
          Если вам понравился «{movieTitle}»
        </h2>

        <div aria-busy={isFetching}>
          {isError && (
            <Feedback
              isFetching={isFetching}
              onRetry={onRetry}
            />
          )}

          {!isError && movies.length === 0 && (
            <Feedback message="Для этого фильма пока нет рекомендаций" />
          )}

          {movies.length > 0 && (
            <Slider
              slidesPerView={4}
              spaceBetween={20}
              a11yConfig={RECOMMENDATIONS_A11Y_CONFIG}
              classNames={{
                slider: styles.slider,
                slides: styles.slides,
                slide: styles.slide,
                nextButton: styles.nextButton
              }}
            >
              {movies.map((movie) => (
                <Link
                  className={styles.movieLink}
                  key={movie.id}
                  to={`/movies/${movie.id}`}
                  aria-label={movie.title}
                >
                  <MovieCard
                    title={movie.title}
                    imagePath={movie.imagePath}
                    media="movie"
                    rating={movie.rating}
                    genres={movie.genres}
                  />
                </Link>
              ))}
            </Slider>
          )}
        </div>
      </Container>
    </section>
  )
}
