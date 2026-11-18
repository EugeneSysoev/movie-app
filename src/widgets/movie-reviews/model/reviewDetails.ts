import type { MovieReviews200ResultsItem } from '@/shared/api/generated/model'
import { TMDB_IMAGE_URLS } from '@/shared/config'
import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

export function getReviewAuthor(review: MovieReviews200ResultsItem): string {
  return (
    review.author_details?.name ||
    review.author ||
    review.author_details?.username ||
    'Автор не указан'
  )
}

export function getReviewRating(review: MovieReviews200ResultsItem): number | undefined {
  const rating = review.author_details?.rating
  if (typeof rating === 'number' && rating >= 0 && rating <= 10) return rating
}

export function getReviewDate(createdAt?: string): string | undefined {
  if (!createdAt) return undefined

  return format(parseISO(createdAt), 'd MMMM yyyy', { locale: ru })
}

export function getReviewAvatarUrl(avatarPath?: string): string | undefined {
  if (!avatarPath) return undefined

  const path =
    avatarPath.startsWith('/https://') || avatarPath.startsWith('/http://')
      ? avatarPath.slice(1)
      : avatarPath

  if (path.startsWith('https://') || path.startsWith('http://')) return path

  return `${TMDB_IMAGE_URLS.w185}${path}`
}
