import { HeroPoster } from './HeroPoster'
import type { HeroSlide } from '../model/slides'
import { formatReleaseDate } from '../model/formatReleaseDate'
import styles from './HeroCard.module.css'

interface HeroCardProps {
  slide: HeroSlide
  priority: boolean
}

export function HeroCard({ slide, priority }: HeroCardProps) {
  return (
    <div className={styles.card}>
      <HeroPoster src={slide.image} priority={priority} />

      <p className={styles.slideTitle}>{slide.title}</p>

      <div className={styles.releaseInfo}>
        <span className={styles.premiereLabel}>Премьера</span>
        <span>{formatReleaseDate(slide.releaseDate)}</span>
      </div>
    </div>
  )
}
