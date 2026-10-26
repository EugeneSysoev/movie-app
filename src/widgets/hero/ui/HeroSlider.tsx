import 'swiper/css'
import 'swiper/css/a11y'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import { useMovieUpcomingList } from '@/shared/api/generated/endpoints'
import { IconButton } from '@/shared/ui/icon-button'
import { getHeroSlides } from '../model/slides'
import arrowIcon from '../assets/arrow.svg'
import styles from './HeroSlider.module.css'
import { HERO_UPCOMING_PARAMS, SWIPER_A11Y_CONFIG } from '../config/constants'
import { HeroCard } from './HeroCard'
import { HeroFeedback } from './HeroFeedback'

export function HeroSlider() {
  const [nextButton, setNextButton] = useState<HTMLButtonElement | null>(null)

  const { data, isPending, isError, isFetching, refetch } =
    useMovieUpcomingList(HERO_UPCOMING_PARAMS)

  const slides = getHeroSlides(data?.results)
  const canSlide = slides.length > 1
  const isEmpty = slides.length === 0
  const showSwiper = slides.length > 0 && (!canSlide || nextButton !== null)

  return (
    <div className={styles.slider} aria-busy={isPending}>
      {isEmpty && (
        <HeroFeedback
          isPending={isPending}
          isError={isError}
          isFetching={isFetching}
          onRetry={() => void refetch()}
        />
      )}

      {canSlide && (
        <IconButton
          className={styles.nextButton}
          type="button"
          ref={setNextButton}
          aria-label="Следующий слайд"
        >
          <img src={arrowIcon} alt="" />
        </IconButton>
      )}

      {showSwiper && (
        <Swiper
          key={slides.map((slide) => slide.id).join('-')}
          className={styles.slides}
          modules={[Navigation, Keyboard, A11y]}
          loop={canSlide}
          virtualTranslate
          speed={0}
          navigation={
            canSlide ? { nextEl: nextButton, addIcons: false } : false
          }
          keyboard={{ enabled: canSlide, pageUpDown: false }}
          a11y={SWIPER_A11Y_CONFIG}
        >
          {slides.map((slide) => (
            <SwiperSlide className={styles.slide} key={slide.id}>
              <HeroCard slide={slide} priority={slide.id === slides[0]?.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
