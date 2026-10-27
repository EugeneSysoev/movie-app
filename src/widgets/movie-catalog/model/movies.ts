import type { DiscoverMovie200ResultsItem } from '@/shared/api/generated/model/discoverMovie200ResultsItem'
import type { GenreMovieList200GenresItem } from '@/shared/api/generated/model/genreMovieList200GenresItem'

export interface CatalogMovie {
  id: number
  title: string
  imagePath: string | null
  rating?: number
  genres: string[]
}

function getGenreNames(
  genreIds: number[],
  genres: GenreMovieList200GenresItem[],
): string[] {
  const names: string[] = []

  for (const genreId of genreIds) {
    const name = genres.find((genre) => genre.id === genreId)?.name

    if (name) {
      names.push(name)
    }
  }

  return names
}

export function getCatalogMovies(
  movies: DiscoverMovie200ResultsItem[] = [],
  genres: GenreMovieList200GenresItem[] = [],
): CatalogMovie[] {
  return movies.slice(0, 10).flatMap((movie) => {
    const { id, title } = movie

    if (id === undefined || title === undefined) return []

    return {
      id,
      title,
      imagePath: movie.backdrop_path ?? null,
      rating: movie.vote_count !== 0 ? movie.vote_average : undefined,
      genres: getGenreNames(movie.genre_ids ?? [], genres),
    }
  })
}
