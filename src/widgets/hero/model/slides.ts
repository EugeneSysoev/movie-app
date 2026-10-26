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
  const slides: HeroSlide[] = []

  for (const movie of movies) {
    if (
      typeof movie.id !== 'number' ||
      !movie.title?.trim() ||
      !movie.poster_path?.startsWith('/')
    ) {
      continue
    }

    slides.push({
      id: movie.id,
      title: movie.title.trim(),
      image: `${TMDB_IMAGE_URLS.w500}${movie.poster_path}`,
      releaseDate: movie.release_date,
    })

    if (slides.length === 3) break
  }

  return slides
}
