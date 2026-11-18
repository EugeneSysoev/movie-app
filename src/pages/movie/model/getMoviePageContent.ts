import { getMovieRating } from '@/entities/movie'
import type { ConfigurationCountries200Item } from '@/shared/api/generated/model/configurationCountries200Item'
import type { GenreMovieList200 } from '@/shared/api/generated/model/genreMovieList200'
import type { MovieCredits200 } from '@/shared/api/generated/model/movieCredits200'
import type { MovieDetails200 } from '@/shared/api/generated/model/movieDetails200'
import type { MovieRecommendations200 } from '@/shared/api/generated/model/movieRecommendations200'
import {
  getMovieActors,
  getMovieDirectors
} from '@/widgets/movie-about/model/movieCredits'
import { getRecommendedMovies } from '@/widgets/movie-recommendations/model/recommendations'
import {
  getMovieCountries,
  getMovieDuration,
  getMovieGenres,
  getMovieYear
} from './movieDetails'

interface MoviePageContentOptions {
  movieId: number
  details: MovieDetails200 | undefined
  countries: ConfigurationCountries200Item[] | undefined
  credits: MovieCredits200 | undefined
  recommendations: MovieRecommendations200 | undefined
  genres: GenreMovieList200 | undefined
}

export function getMoviePageContent(options: MoviePageContentOptions) {
  const {
    movieId,
    details,
    countries: countryDictionary,
    credits,
    recommendations,
    genres: genreDictionary
  } = options

  const title = details?.title ?? 'Название не указано'
  const rating = getMovieRating({
    voteAverage: details?.vote_average,
    voteCount: details?.vote_count
  })
  const year = getMovieYear(details?.release_date)
  const genres = getMovieGenres(details?.genres)
  const countries = getMovieCountries(
    details?.production_countries,
    countryDictionary
  )
  const duration = getMovieDuration(details?.runtime)
  const actors = getMovieActors(credits?.cast)
  const directors = getMovieDirectors(credits?.crew)
  const movies = getRecommendedMovies(
    recommendations,
    genreDictionary?.genres,
    movieId
  )

  return {
    cover: {
      title,
      backdropPath: details?.backdrop_path ?? null,
      rating,
      year,
      genres: genres.slice(0, 2),
      countries,
      duration,
      movieId
    },
    about: {
      overview: details?.overview || 'Описание фильма не указано',
      rating,
      genres,
      countries,
      duration,
      actors,
      directors
    },
    recommendations: {
      movieTitle: title,
      movies
    }
  }
}
