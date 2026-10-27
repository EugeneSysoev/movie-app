import { TMDB_LANGUAGE } from '@/shared/config'

export const HERO_UPCOMING_PARAMS = {
  language: TMDB_LANGUAGE,
  region: 'RU',
  page: 1,
}

export const SWIPER_A11Y_CONFIG = {
  containerMessage: 'Ближайшие премьеры в России',
  containerRoleDescriptionMessage: 'Карусель',
  itemRoleDescriptionMessage: 'Слайд',
  slideLabelMessage: '{{index}} из {{slidesLength}}',
  nextSlideMessage: 'Следующий слайд',
  prevSlideMessage: 'Предыдущий слайд',
}