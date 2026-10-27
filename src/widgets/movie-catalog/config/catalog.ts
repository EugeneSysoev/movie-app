import type { DiscoverMovieParams } from '@/shared/api/generated/model/discoverMovieParams'
import { TMDB_LANGUAGE } from '@/shared/config'

export const CATALOG_ROWS = [
  { genreId: 35, title: 'Комедии' },
  { genreId: 18, title: 'Драмы' },
  { genreId: 14, title: 'Фэнтези' },
  { genreId: 53, title: 'Триллеры' },
  { genreId: 9648, title: 'Детективы' },
]

export const CATALOG_DISCOVER_PARAMS = {
  language: TMDB_LANGUAGE,
  include_adult: false,
  include_video: false,
  sort_by: 'popularity.desc',
  page: 1,
} satisfies DiscoverMovieParams

export const CATALOG_GENRE_PARAMS = { language: TMDB_LANGUAGE }

export function getCatalogA11yConfig(label: string) {
  return {
    containerMessage: label,
    containerRoleDescriptionMessage: 'Карусель фильмов',
    itemRoleDescriptionMessage: 'Карточка фильма',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
    nextSlideMessage: `Следующие фильмы: ${label}`,
  }
}
