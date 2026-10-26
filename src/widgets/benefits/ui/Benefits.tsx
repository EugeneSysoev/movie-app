import { benefits } from '../config/benefits'
import styles from './Benefits.module.css'

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

