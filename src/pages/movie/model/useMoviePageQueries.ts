import { TMDB_LANGUAGE_PARAMS } from '@/shared/config'
import {
  useConfigurationCountries,
  useGenreMovieList,
  useMovieCredits,
  useMovieDetails,
  useMovieRecommendations
} from '@/shared/api/generated/endpoints'

export function useMoviePageQueries(
  numericMovieId: number,
  isValidMovieId: boolean
) {
  const queryOptions = { query: { enabled: isValidMovieId } }

  const detailsQuery = useMovieDetails(
    numericMovieId,
    TMDB_LANGUAGE_PARAMS,
    queryOptions
  )

  const countriesQuery = useConfigurationCountries(
    TMDB_LANGUAGE_PARAMS,
    queryOptions
  )

  const creditsQuery = useMovieCredits(
    numericMovieId,
    TMDB_LANGUAGE_PARAMS,
    queryOptions
  )

  const recommendationsQuery = useMovieRecommendations(
    numericMovieId,
    TMDB_LANGUAGE_PARAMS,
    queryOptions
  )

  const genresQuery = useGenreMovieList(TMDB_LANGUAGE_PARAMS, queryOptions)

  return {
    detailsQuery,
    countriesQuery,
    creditsQuery,
    recommendationsQuery,
    genresQuery
  }
}
