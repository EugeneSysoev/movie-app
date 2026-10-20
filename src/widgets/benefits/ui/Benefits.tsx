import selectionIcon from '../assets/1 icon.png'
import recommendationsIcon from '../assets/2 icon.png'
import worldCinemaIcon from '../assets/3 icon.png'
import freeMonthIcon from '../assets/4 icon.png'
import styles from './Benefits.module.css'

const benefits = [
  {
    title: 'Большой выбор',
    icon: selectionIcon,
    description:
      '10 000 фильмов и сериалов уже\nв библиотеке. Ежедневное пополнение\nновинками кино',
  },
  {
    title: 'Список рекомендаций',
    icon: recommendationsIcon,
    description:
      'Персонализированный список\nрекомендаций, подобранных на основе\nваших интересов',
  },
  {
    title: 'Лучшее мировое кино',
    icon: worldCinemaIcon,
    description:
      'Кино, сериалы со всего мира, включая\nЕвропу и Азию. А также достойное\nроссийское кино',
  },
  {
    title: 'Месяц бесплатно',
    icon: freeMonthIcon,
    description:
      'Весь каталог КиноДома и все новинки кино\nи сериалов — бесплатно целый месяц после\nрегистрации',
  },
]

type BenefitItemProps = {
  icon: string
  title: string
  description: string
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <li className={styles.item}>
      <img className={styles.icon} src={icon} alt="" />
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  )
}

export function Benefits() {
  return (
    <section className={styles.benefits} aria-labelledby="benefits-title">
      <h2 className={styles.title} id="benefits-title">
        Преимущества КиноДома
      </h2>

      <ul className={styles.list}>
        {benefits.map(({ icon, title, description }) => (
          <BenefitItem
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  )
}
