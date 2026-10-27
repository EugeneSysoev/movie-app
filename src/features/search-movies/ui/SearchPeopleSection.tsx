import { PersonItem } from '@/entities/person'
import { people } from '../config/people'
import styles from './SearchResults.module.css'

export function SearchPeopleSection() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.peopleTitle}>Актёры и режиссёры</h2>

      <ul className={`${styles.list} ${styles.peopleList}`}>
        {people.map((person) => (
          <li key={person.id}>
            <PersonItem person={person} />
          </li>
        ))}
      </ul>
    </section>
  )
}
