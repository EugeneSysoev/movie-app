import 'swiper/css'
import 'swiper/css/a11y'
import { Children, useState, type ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import type { A11yOptions } from 'swiper/types'
import { IconButton } from '@/shared/ui/icon-button'
import arrowIcon from './arrow.svg'

interface SliderProps {
  children: ReactElement[]
  a11yConfig: A11yOptions
  slidesPerView: number
  spaceBetween: number
  classNames: {
    slider: string
    slides: string
    slide: string
    nextButton: string
  }
  virtualTranslate?: boolean
  speed?: number
  keyboardEnabled?: boolean
}

export function Slider({
  children,
  a11yConfig,
  slidesPerView,
  spaceBetween,
  classNames,
  virtualTranslate = false,
  speed = 300,
  keyboardEnabled = false,
}: SliderProps) {
  const [nextButton, setNextButton] = useState<HTMLButtonElement | null>(null)

  const slides = children
  const canSlide = slides.length > slidesPerView

  if (slides.length === 0) return null

  return (
    <div className={classNames.slider}>
      {canSlide && (
        <IconButton
          className={classNames.nextButton}
          ref={setNextButton}
          aria-label={a11yConfig.nextSlideMessage ?? 'Следующий слайд'}
        >
          <img src={arrowIcon} alt="" />
        </IconButton>
      )}

      {(!canSlide || nextButton !== null) && (
        <Swiper
          key={slides.map((slide) => slide.key).join('-')}
          className={classNames.slides}
          modules={[Navigation, A11y, Keyboard]}
          slidesPerView={slidesPerView}
          slidesPerGroup={1}
          spaceBetween={spaceBetween}
          loop={canSlide}
          navigation={
            canSlide ? { nextEl: nextButton, addIcons: false } : false
          }
          a11y={a11yConfig}
          virtualTranslate={virtualTranslate}
          speed={speed}
          keyboard={
            canSlide && keyboardEnabled
              ? { enabled: true, pageUpDown: false }
              : false
          }
        >
          {Children.map(slides, (card) => (
            <SwiperSlide className={classNames.slide}>{card}</SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
