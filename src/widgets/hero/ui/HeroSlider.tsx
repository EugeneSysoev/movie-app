import { useMovieUpcomingList } from '@/shared/api/generated/endpoints'
import { getHeroSlides } from '../model/slides'
import { HERO_UPCOMING_PARAMS, SWIPER_A11Y_CONFIG } from '../config/constants'
import { HeroCard } from './HeroCard'
import { HeroFeedback } from './HeroFeedback'
import { Slider } from '@/shared/ui/slider'
import styles from './HeroSlider.module.css'

export function HeroSlider() {
  const { data, isPending, isError, isFetching, refetch } =
    useMovieUpcomingList(HERO_UPCOMING_PARAMS)

  const slides = getHeroSlides(data?.results)

  const isEmpty = slides.length === 0

  if (isEmpty) {
    return (
      <div className={styles.slider} aria-busy={isPending}>
        <HeroFeedback
          isPending={isPending}
          isError={isError}
          isFetching={isFetching}
          onRetry={() => void refetch()}
        />
      </div>
    )
  }

  return (
    <Slider
      slidesPerView={1}
      spaceBetween={0}
      virtualTranslate={true}
      speed={0}
      keyboardEnabled={true}
      a11yConfig={SWIPER_A11Y_CONFIG}
      classNames={{
        slider: styles.slider,
        slides: styles.slides,
        slide: styles.slide,
        nextButton: styles.nextButton,
      }}
    >
      {slides.map((slide) => (
        <HeroCard
          key={slide.id}
          slide={slide}
          priority={slide.id === slides[0]?.id}
        />
      ))}
    </Slider>
  )
}
