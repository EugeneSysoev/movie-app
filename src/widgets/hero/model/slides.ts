import type { MovieUpcomingList200ResultsItem } from '@/shared/api/generated/model/movieUpcomingList200ResultsItem'
import { TMDB_IMAGE_URLS } from '@/shared/config'

export type HeroSlide = {
  id: number
  title: string
  image: string
  releaseDate?: string
}

export function getHeroSlides(
  movies: MovieUpcomingList200ResultsItem[] = [],
): HeroSlide[] {
  return movies
    .slice(0, 3)
    .map((movie) => {
      const { id, title, poster_path } = movie

      if (id === undefined || title === undefined || !poster_path) return null

      return {
        id,
        title,
        image: `${TMDB_IMAGE_URLS.w500}${poster_path}`,
        releaseDate: movie.release_date,
      }
    })
    .filter((slide) => slide !== null)
}
