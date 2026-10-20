import type { Person } from '../model/types'
import styles from './PersonItem.module.css'

interface PersonItemProps {
  person: Person
}

export function PersonItem({ person }: PersonItemProps) {
  const profession =
    person.known_for_department === 'Acting'
      ? 'Актёр'
      : person.known_for_department === 'Directing'
        ? 'Режиссёр'
        : null

  return (
    <article className={styles.wrap}>
      <h3 className={styles.name}>{person.name}</h3>
      {profession && <p className={styles.profession}>{profession}</p>}
    </article>
  )
}
