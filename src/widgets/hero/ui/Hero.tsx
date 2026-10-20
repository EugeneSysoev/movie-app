import { Button } from '@/shared/ui/button'
import styles from './Hero.module.css'
import { Container } from '@/shared/ui/container'
import { slides } from '../model/slides'
import { useState } from 'react'
import arrowIcon from '../assets/arrow.svg'
import { IconButton } from '@/shared/ui/icon-button'

function HeroPoster({ src, priority }: { src: string; priority: boolean }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <div className={styles.posterFrame}>
      <img
        className={styles.poster}
        data-loaded={status === 'loaded'}
        src={src}
        alt=""
        width={378}
        height={487}
        loading="eager"
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
      {status === 'error' && (
        <span className={styles.posterError}>Не удалось загрузить постер</span>
      )}
    </div>
  )
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleSlides = [
    ...slides.slice(activeIndex),
    ...slides.slice(0, activeIndex),
  ].slice(0, 3)

  const handleNext = () =>
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.content}>
          <div className={styles.wrapperDescription}>
            <h1 className={styles.title} id="hero-title">
              Самые сочные премьеры кино — у вас дома
            </h1>
            <p className={styles.description}>
              Ежедневно пополняемая библиотека
              <br />
              с лучшими фильмами и сериалами — в дубляже
              <br />и оригинале. Целый месяц бесплатно!
            </p>
            <Button
              className={styles.buttonHero}
              disabled
              title="Подписка пока недоступна"
            >
              Смотреть бесплатно
            </Button>
          </div>

          <div className={styles.slider}>
            <ul className={styles.slides}>
              {visibleSlides.map((slide) => (
                <li className={styles.slide} key={slide.id}>
                  <HeroPoster
                    src={slide.image}
                    priority={slide.id === slides[0]?.id}
                  />
                  <p className={styles.slideTitle}>{slide.title}</p>
                </li>
              ))}
            </ul>

            <IconButton
              className={styles.nextButton}
              type="button"
              onClick={handleNext}
              aria-label="Следующий слайд"
            >
              <img src={arrowIcon} alt="" />
            </IconButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
