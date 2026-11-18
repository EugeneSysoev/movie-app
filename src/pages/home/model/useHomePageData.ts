import {
  getDiscoverMovieQueryOptions,
  useGenreMovieList,
  useMovieUpcomingList
} from '@/shared/api/generated/endpoints'
import {
  CATALOG_DISCOVER_PARAMS,
  CATALOG_GENRE_PARAMS,
  CATALOG_ROWS
} from '@/widgets/movie-catalog/config/catalog'
import { HERO_UPCOMING_PARAMS } from '@/widgets/hero/config/constants'
import { getHeroSlides } from '@/widgets/hero/model/slides'
import { getCatalogMovies } from '@/widgets/movie-catalog/model/movies'
import { useQueries } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useHomePageData() {
  const upcomingQuery = useMovieUpcomingList(HERO_UPCOMING_PARAMS)
  const genresQuery = useGenreMovieList(CATALOG_GENRE_PARAMS)

  const genreQueries = useQueries({
    queries: CATALOG_ROWS.map((row) => {
      return getDiscoverMovieQueryOptions({
        ...CATALOG_DISCOVER_PARAMS,
        with_genres: String(row.genreId)
      })
    })
  })

  const genres = genresQuery.data?.genres ?? []

  const catalogRows = CATALOG_ROWS.map((row, index) => {
    const query = genreQueries[index]
    const movies = getCatalogMovies(query.data?.results, genres)
    return {
      ...row,
      movies,
      isError: query.isError,
      isFetching: query.isFetching || genresQuery.isFetching,
      onRetry: () => {
        void query.refetch()
        void genresQuery.refetch()
      }
    }
  })

  const upcomingMovies = upcomingQuery.data?.results
  const slides = useMemo(() => getHeroSlides(upcomingMovies), [upcomingMovies])

  const isCatalogLoading =
    !genresQuery.isFetched ||
    genreQueries.some((query) => !query.isFetched)

  return {
    upcomingQuery,
    slides,
    isCatalogLoading,
    catalogRows
  }
}
