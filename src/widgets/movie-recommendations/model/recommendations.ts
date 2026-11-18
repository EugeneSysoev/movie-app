import { getMovieRating } from '@/entities/movie'
import type {
  DiscoverMovie200ResultsItem,
  GenreMovieList200GenresItem,
  MovieRecommendations200
} from '@/shared/api/generated/model'

export interface RecommendedMovie {
  id: number
  title: string
  imagePath: string | null
  rating?: number
  genres: string[]
}

export function getRecommendedMovies(
  response: MovieRecommendations200 | undefined,
  genres: GenreMovieList200GenresItem[] = [],
  currentMovieId: number
): RecommendedMovie[] {
  const movies = (response?.results ?? []) as DiscoverMovie200ResultsItem[]

  return movies.slice(0, 10).flatMap((movie) => {
    if (
      movie.id === undefined ||
      movie.title === undefined ||
      movie.id === currentMovieId
    )
      return []

    return {
      id: movie.id,
      title: movie.title,
      imagePath: movie.backdrop_path ?? null,
      rating: getMovieRating({
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count
      }),
      genres: (movie.genre_ids ?? [])
        .map((id) => genres.find((genre) => genre.id === id)?.name)
        .filter((name) => name !== undefined)
    }
  })
}
