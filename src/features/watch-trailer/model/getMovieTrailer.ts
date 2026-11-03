import { type MovieVideos200ResultsItem } from '@/shared/api/generated/model'

export function getMovieTrailer(
  videos: MovieVideos200ResultsItem[] = []
): string | undefined {
  const trailers = videos.filter(
    (video) =>
      video.site === 'YouTube' && video.type === 'Trailer' && Boolean(video.key)
  )

  const ruTrailer = trailers.find((video) => video.iso_639_1 === 'ru')
  const enTrailer = trailers.find((video) => video.iso_639_1 === 'en')

  return ruTrailer?.key ?? enTrailer?.key
}
