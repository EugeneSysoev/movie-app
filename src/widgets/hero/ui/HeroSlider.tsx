import { HeroCard } from './HeroCard'
import { Feedback } from '@/shared/ui/feedback'
import { Loader } from '@/shared/ui/loader'
import { Slider } from '@/shared/ui/slider'
import { memo } from 'react'
import styles from './HeroSlider.module.css'
import type { HeroSlide } from '../model/slides'
import { SWIPER_A11Y_CONFIG } from '../config/constants'

interface HeroSliderProps {
  slides: HeroSlide[]
  isPending: boolean
  isError: boolean
  isFetching: boolean
  onRetry: () => void
}

const PremiereCarousel = memo(function PremiereCarousel({ slides }: { slides: HeroSlide[] }) {
  return (
    <Slider
      slidesPerView={1}
      spaceBetween={0}
      virtualTranslate
      rewind
      speed={0}
      keyboardEnabled
      a11yConfig={SWIPER_A11Y_CONFIG}
      classNames={{
        slider: styles.carousel,
        slides: styles.slides,
        slide: styles.slide,
        nextButton: styles.nextButton
      }}
    >
      {slides.map((slide, index) => (
        <HeroCard key={slide.id} slide={slide} priority={index === 0} />
      ))}
    </Slider>
  )
})

export function HeroSlider(props: HeroSliderProps) {
  const { slides, isPending, isError, isFetching, onRetry } = props
  const isEmpty = slides.length === 0
  return (
    <div className={styles.slider} aria-busy={isFetching}>
      {isPending && <Loader className={styles.placeholder} label="Загрузка премьер" />}
      {!isEmpty && <PremiereCarousel slides={slides} />}

      {isError && (
        <Feedback
          className={isEmpty ? styles.placeholder : undefined}
          isFetching={isFetching}
          onRetry={onRetry}
        />
      )}
      {isEmpty && !isPending && !isError && (
        <Feedback className={styles.placeholder} message="Нет доступных премьер." />
      )}
    </div>
  )
}
