import { useMovieReviewsData } from '@/widgets/movie-reviews/model/useMovieReviewsData'
import { getMoviePageContent } from './getMoviePageContent'
import { getMoviePageFeedbackProps } from './getMoviePageFeedbackProps'
import { useMoviePageQueries } from './useMoviePageQueries'

export function useMoviePageData(movieId: string | undefined) {
  const numericMovieId = Number(movieId)
  const isValidMovieId = Number.isInteger(numericMovieId) && numericMovieId > 0

  const {
    detailsQuery,
    countriesQuery,
    creditsQuery,
    recommendationsQuery,
    genresQuery
  } = useMoviePageQueries(numericMovieId, isValidMovieId)

  const content = getMoviePageContent({
    movieId: numericMovieId,
    details: detailsQuery.data,
    countries: countriesQuery.data,
    credits: creditsQuery.data,
    recommendations: recommendationsQuery.data,
    genres: genresQuery.data
  })

  const { isInitialFetched: isReviewsInitialFetched, reviewsProps } =
    useMovieReviewsData(numericMovieId, isValidMovieId)

  const aboutQueries = [detailsQuery, creditsQuery, countriesQuery]
  const recommendationsQueries = [recommendationsQuery, genresQuery]

  const initialQueries = [...aboutQueries, ...recommendationsQueries]

  function retryRecommendations() {
    recommendationsQueries.forEach((query) => void query.refetch())
  }

  function retryMovieAbout() {
    aboutQueries.forEach((query) => void query.refetch())
  }

  const isInitialLoading =
    isValidMovieId &&
    (initialQueries.some((query) => !query.isFetched) || !isReviewsInitialFetched)

  const isAboutFetching = aboutQueries.some((query) => query.isFetching)

  const isAboutError = detailsQuery.isError || creditsQuery.isError

  const aboutProps = {
    ...content.about,
    isError: isAboutError,
    isFetching: isAboutFetching,
    onRetry: retryMovieAbout
  }

  const recommendationsProps = {
    ...content.recommendations,
    isError: recommendationsQuery.isError,
    isFetching: recommendationsQueries.some((query) => query.isFetching),
    onRetry: retryRecommendations
  }

  const feedbackProps = getMoviePageFeedbackProps({
    isValidMovieId,
    isInitialLoading,
    error: detailsQuery.error,
    hasData: Boolean(detailsQuery.data),
    isFetching: detailsQuery.isFetching,
    onRetry: () => void detailsQuery.refetch()
  })

  return {
    numericMovieId,
    isInitialLoading,
    feedbackProps,
    coverProps: content.cover,
    aboutProps,
    recommendationsProps,
    reviewsProps
  }
}
