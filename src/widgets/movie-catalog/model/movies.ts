import type { DiscoverMovie200ResultsItem } from '@/shared/api/generated/model/discoverMovie200ResultsItem'
import type { GenreMovieList200GenresItem } from '@/shared/api/generated/model/genreMovieList200GenresItem'

export interface CatalogMovie {
  id: number
  title: string
  imagePath: string | null
  rating?: number
  genres: string[]
}

export function getCatalogMovies(
  movies: DiscoverMovie200ResultsItem[] = [],
  genres: GenreMovieList200GenresItem[] = [],
): CatalogMovie[] {
  const cards: CatalogMovie[] = []
  const usedIds = new Set<number>()

  for (const movie of movies) {
    if (
      typeof movie.id !== 'number' ||
      !Number.isInteger(movie.id) ||
      movie.id <= 0 ||
      !movie.title?.trim() ||
      usedIds.has(movie.id)
    ) {
      continue
    }

    const genreNames: string[] = []

    for (const genreId of movie.genre_ids ?? []) {
      const name = genres.find((genre) => genre.id === genreId)?.name?.trim()
      if (name && !genreNames.includes(name)) genreNames.push(name)
    }

    const rating =
      typeof movie.vote_average === 'number' &&
      Number.isFinite(movie.vote_average) &&
      movie.vote_average > 0 &&
      movie.vote_average <= 10 &&
      movie.vote_count !== 0
        ? movie.vote_average
        : undefined

    cards.push({
      id: movie.id,
      title: movie.title.trim(),
      imagePath: movie.backdrop_path?.startsWith('/')
        ? movie.backdrop_path
        : null,
      rating,
      genres: genreNames,
    })
    usedIds.add(movie.id)

    if (cards.length === 10) break
  }

  return cards
}
