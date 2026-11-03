import { MovieCard } from '@/entities/movie'
import { useGenreMovieList, useMovieRecommendations } from '@/shared/api/generated/endpoints'
import { TMDB_LANGUAGE } from '@/shared/config'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Slider } from '@/shared/ui/slider'
import { Link } from 'react-router'
import { getRecommendedMovies } from '../model/recommendations'
import styles from './MovieRecommendations.module.css'

interface MovieRecommendationsProps {
  movieId: number
  movieTitle: string
}

export function MovieRecommendations({ movieId, movieTitle }: MovieRecommendationsProps) {
  const { data, isPending, isError, isFetching, refetch } = useMovieRecommendations(
    movieId,
    { language: TMDB_LANGUAGE }
  )
  const genresQuery = useGenreMovieList({ language: TMDB_LANGUAGE })
  const movies = getRecommendedMovies(data, genresQuery.data?.genres, movieId)

  return (
    <section className={styles.recommendations} aria-labelledby="recommendations-title">
      <Container>
        <h2 className={styles.title} id="recommendations-title">
          Если вам понравился «{movieTitle}»
        </h2>
        <div aria-busy={isFetching}>
          {isPending && <p className={styles.message} role="status">Загружаем рекомендации…</p>}
          {isError && (
            <div className={styles.feedback}>
              <p role="alert">Не удалось загрузить рекомендации.</p>
              <Button variant="outline" disabled={isFetching} onClick={() => void refetch()}>
                {isFetching ? 'Повторяем запрос…' : 'Повторить запрос'}
              </Button>
            </div>
          )}
          {!isPending && !isError && movies.length === 0 && (
            <div className={styles.feedback}>
              <p className={styles.message}>Для этого фильма пока нет рекомендаций.</p>
              <Button variant="outline" disabled={isFetching} onClick={() => void refetch()}>
                Обновить рекомендации
              </Button>
            </div>
          )}
          {!isPending && !isError && movies.length > 0 && (
            <>
              {genresQuery.isError && (
                <div className={styles.feedback}>
                  <p role="alert">Не удалось загрузить названия жанров.</p>
                  <Button
                    variant="outline"
                    disabled={genresQuery.isFetching}
                    onClick={() => void genresQuery.refetch()}
                  >
                    Повторить загрузку жанров
                  </Button>
                </div>
              )}
              <Slider
                slidesPerView={4}
                spaceBetween={20}
                a11yConfig={{
                  containerMessage: 'Рекомендации к фильму',
                  containerRoleDescriptionMessage: 'Карусель фильмов',
                  itemRoleDescriptionMessage: 'Карточка фильма',
                  slideLabelMessage: '{{index}} из {{slidesLength}}',
                  nextSlideMessage: 'Следующие рекомендации'
                }}
                classNames={{
                  slider: styles.slider,
                  slides: styles.slides,
                  slide: styles.slide,
                  nextButton: styles.nextButton
                }}
              >
                {movies.map((movie) => (
                  <Link className={styles.movieLink} key={movie.id} to={`/movies/${movie.id}`} aria-label={movie.title}>
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
            </>
          )}
        </div>
      </Container>
    </section>
  )
}
