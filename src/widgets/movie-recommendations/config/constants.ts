import type { A11yOptions } from 'swiper/types'

export const RECOMMENDATIONS_A11Y_CONFIG = {
  containerMessage: 'Рекомендации к фильму',
  containerRoleDescriptionMessage: 'Карусель фильмов',
  itemRoleDescriptionMessage: 'Карточка фильма',
  slideLabelMessage: '{{index}} из {{slidesLength}}',
  nextSlideMessage: 'Следующие рекомендации'
} satisfies A11yOptions
