import type {
  MovieReviews200,
  MovieReviews200ResultsItem
} from '@/shared/api/generated/model'
import { TMDB_LANGUAGE, TMDB_LANGUAGE_EN } from '@/shared/config/tmdb'

interface ReviewPaginationProps {
  page: number
  ruTotalPages: number
}

export function getReviewApiPageCount(firstPage?: MovieReviews200) {
  const reportedPages = firstPage?.total_pages ?? 0
  if (reportedPages > 1) return reportedPages
  return firstPage?.results?.length ? 1 : 0
}

export function getReviewPageParams(props: ReviewPaginationProps) {
  const { page, ruTotalPages } = props

  if (page <= ruTotalPages) {
    return { page, language: TMDB_LANGUAGE }
  }

  return { page: page - ruTotalPages, language: TMDB_LANGUAGE_EN }
}

export function getReviewGroup(
  reviews: MovieReviews200ResultsItem[],
  startIndex: number
) {
  const candidates = reviews.slice(startIndex, startIndex + 3)
  const hasLongReview = candidates.some(
    (review) => (review.content?.length ?? 0) > 1000
  )
  return hasLongReview ? candidates.slice(0, 2) : candidates
}

export function getReviewGroupStarts(reviews: MovieReviews200ResultsItem[]) {
  const starts: number[] = []
  let startIndex = 0

  while (startIndex < reviews.length) {
    starts.push(startIndex)

    const group = getReviewGroup(reviews, startIndex)
    startIndex += group.length
  }

  return starts
}

export function getReviewPagePositions(
  apiPages: (MovieReviews200 | undefined)[],
  hasMoreApiPages: boolean
) {
  const positions: { apiPage: number; startIndex: number }[] = []

  for (const [index, data] of apiPages.entries()) {
    const apiPage = index + 1
    const starts = getReviewGroupStarts(data?.results ?? [])
    if (starts.length === 0) starts.push(0)

    for (const startIndex of starts) {
      positions.push({ apiPage, startIndex })
    }

    if (!data) return positions
  }

  if (hasMoreApiPages) {
    positions.push({ apiPage: apiPages.length + 1, startIndex: 0 })
  }

  return positions
}
