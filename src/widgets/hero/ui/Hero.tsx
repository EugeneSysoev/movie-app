import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { HeroSlider } from './HeroSlider'
import styles from './Hero.module.css'

export function Hero() {
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

          <HeroSlider />
        </div>
      </Container>
    </section>
  )
}
