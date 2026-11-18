import { isAxiosError } from 'axios'

interface MoviePageFeedbackOptions {
  isValidMovieId: boolean
  isInitialLoading: boolean
  error: unknown
  hasData: boolean
  isFetching: boolean
  onRetry: () => void
}

export function getMoviePageFeedbackProps(options: MoviePageFeedbackOptions) {
  const {
    isValidMovieId,
    isInitialLoading,
    error,
    hasData,
    isFetching,
    onRetry
  } = options

  if (!isValidMovieId) {
    return { message: 'Некорректный ID фильма' }
  }

  if (isAxiosError(error) && error.response?.status === 404 && !hasData) {
    return { message: 'Фильм не найден' }
  }

  if (isInitialLoading || hasData) return null

  return {
    isFetching,
    onRetry
  }
}
