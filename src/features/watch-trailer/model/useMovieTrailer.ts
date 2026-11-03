import { useMovieVideos } from '@/shared/api/generated/endpoints'
import { getMovieTrailer } from './getMovieTrailer'

export function useMovieTrailer(movieId: number) {
  const ruQuery = useMovieVideos(movieId, {
    language: 'ru-RU'
  })

  const ruTrailerKey = getMovieTrailer(ruQuery.data?.results)

  const shouldLoadEnglish = ruQuery.isSuccess && !ruTrailerKey

  const enQuery = useMovieVideos(
    movieId,
    { language: 'en-US' },
    { query: { enabled: shouldLoadEnglish } }
  )

  const activeQuery = shouldLoadEnglish ? enQuery : ruQuery

  return {
    trailerKey: getMovieTrailer(activeQuery.data?.results),
    isPending: activeQuery.isPending,
    isError: activeQuery.isError,
    refetch: activeQuery.refetch
  }
}
