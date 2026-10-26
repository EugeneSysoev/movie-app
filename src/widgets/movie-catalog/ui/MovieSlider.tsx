import 'swiper/css'
import 'swiper/css/a11y'
import { Children, useState, type ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation } from 'swiper/modules'
import { IconButton } from '@/shared/ui/icon-button'
import { getCatalogA11yConfig } from '../config/catalog'
import arrowIcon from '../assets/arrow.svg'
import styles from './MovieSlider.module.css'

interface MovieSliderProps {
  children: ReactElement[]
  label: string
}

export function MovieSlider({ children, label }: MovieSliderProps) {
  const [nextButton, setNextButton] = useState<HTMLButtonElement | null>(null)
  const a11yConfig = getCatalogA11yConfig(label)
  const slides = children.slice(0, 10)
  const canSlide = slides.length > 4

  if (slides.length === 0) return null

  return (
    <div className={styles.slider}>
      {canSlide && (
        <IconButton
          className={styles.nextButton}
          ref={setNextButton}
          aria-label={a11yConfig.nextSlideMessage}
        >
          <img src={arrowIcon} alt="" />
        </IconButton>
      )}

      {(!canSlide || nextButton !== null) && (
        <Swiper
          key={slides.length}
          className={styles.slides}
          modules={[Navigation, A11y]}
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={20}
          loop={canSlide}
          navigation={
            canSlide ? { nextEl: nextButton, addIcons: false } : false
          }
          a11y={a11yConfig}
        >
          {Children.map(slides, (card) => (
            <SwiperSlide className={styles.slide}>{card}</SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
