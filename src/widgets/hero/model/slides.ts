import terminatorPoster from '../assets/terminator.webp'
import papillonPoster from '../assets/papillon.webp'
import homeAlonePoster from '../assets/home-alone.webp'

export type HeroSlide = {
  id: number
  title: string
  image: string
}

export const slides: HeroSlide[] = [
  { id: 1, title: 'Терминатор', image: terminatorPoster },
  { id: 2, title: 'Один дома', image: homeAlonePoster },
  { id: 3, title: 'Мотылёк', image: papillonPoster },
]
