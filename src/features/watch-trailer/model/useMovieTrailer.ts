import { useMovieVideos } from '@/shared/api/generated/endpoints'
import { getMovieTrailer } from './getMovieTrailer'
import { TMDB_LANGUAGE, TMDB_LANGUAGE_EN } from '@/shared/config/tmdb'

export function useMovieTrailer(movieId: number) {
  const ruQuery = useMovieVideos(movieId, { language: TMDB_LANGUAGE })

  const ruTrailerKey = getMovieTrailer(ruQuery.data?.results)

  const shouldLoadEnglish = ruQuery.isSuccess && !ruTrailerKey

  const enQuery = useMovieVideos(
    movieId,
    { language: TMDB_LANGUAGE_EN },
    { query: { enabled: shouldLoadEnglish } }
  )

  const enTrailerKey = getMovieTrailer(enQuery.data?.results)

  const activeQuery = shouldLoadEnglish ? enQuery : ruQuery

  return {
    trailerKey: ruTrailerKey ?? enTrailerKey,
    isPending: activeQuery.isPending,
    isError: activeQuery.isError,
    refetch: activeQuery.refetch,
    isFetching: activeQuery.isFetching
  }
}
