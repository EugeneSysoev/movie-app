import { getMovieRating } from '@/entities/movie'
import {
  useConfigurationCountries,
  useMovieDetails
} from '@/shared/api/generated/endpoints'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { MovieAbout } from '@/widgets/movie-about'
import { MovieCover } from '@/widgets/movie-cover/ui'
import { MovieReviews } from '@/widgets/movie-reviews'
import { MovieRecommendations } from '@/widgets/movie-recommendations'
import { isAxiosError } from 'axios'
import { useParams } from 'react-router'
import styles from './MoviePage.module.css'
import {
  getMovieCountries,
  getMovieDuration,
  getMovieGenres,
  getMovieYear
} from '../model/movieDetails'

export function MoviePage() {
  const { movieId } = useParams()
  const numericMovieId = Number(movieId)
  const isValidMovieId = Number.isInteger(numericMovieId) && numericMovieId > 0

  const { data, isPending, isError, error, refetch } = useMovieDetails(
    numericMovieId,
    { language: 'ru-RU' },
    { query: { enabled: isValidMovieId } }
  )

  const {
    data: countriesData,
    isError: isCountriesError,
    isFetching: isCountriesFetching,
    refetch: refetchCountries
  } = useConfigurationCountries(
    {
      language: 'ru-RU'
    },
    { query: { enabled: isValidMovieId } }
  )

  if (isAxiosError(error) && error.response?.status === 404) {
    return (
      <main>
        <Container>
          <h1>Фильм не найден</h1>
        </Container>
      </main>
    )
  }
  if (!isValidMovieId) {
    return (
      <main>
        <Container>
          <h1>Некорректный ID фильма</h1>
        </Container>
      </main>
    )
  }

  if (isPending)
    return (
      <main>
        <Container>
          <h1>Загружаем фильм...</h1>
        </Container>
      </main>
    )

  if (isError)
    return (
      <main>
        <Container>
          <Button onClick={() => void refetch()}>Повторить запрос</Button>
          <h1>Не удалось загрузить фильм</h1>
        </Container>
      </main>
    )

  const rating = getMovieRating({
    voteAverage: data?.vote_average,
    voteCount: data?.vote_count
  })
  const genres = getMovieGenres(data?.genres)
  const countries = getMovieCountries(data?.production_countries, countriesData)
  const duration = getMovieDuration(data?.runtime)

  return (
    <main>
      <MovieCover
        title={data?.title ?? 'Название не указано'}
        backdropPath={data?.backdrop_path ?? null}
        rating={rating}
        year={getMovieYear(data?.release_date)}
        genres={genres.slice(0, 2)}
        countries={countries}
        duration={duration}
        movieId={numericMovieId}
      />
      <MovieAbout
        overview={data?.overview || 'Описание фильма не указано'}
        movieId={numericMovieId}
        rating={rating}
        genres={genres}
        countries={countries}
        duration={duration}
      />
      {isCountriesError && (
        <Container>
          <div className={styles.feedback}>
            <p role="alert">Не удалось загрузить названия стран на русском. Показаны исходные названия.</p>
            <Button
              variant="outline"
              disabled={isCountriesFetching}
              onClick={() => void refetchCountries()}
            >
              Повторить загрузку стран
            </Button>
          </div>
        </Container>
      )}
      <MovieReviews key={`reviews-${numericMovieId}`} movieId={numericMovieId} />
      <MovieRecommendations
        key={`recommendations-${numericMovieId}`}
        movieId={numericMovieId}
        movieTitle={data?.title ?? 'Название не указано'}
      />
    </main>
  )
}
