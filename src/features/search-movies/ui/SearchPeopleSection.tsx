import { PersonItem } from '@/entities/person'
import type { Person } from '@/entities/person'
import styles from './SearchResults.module.css'

const people: Person[] = [
  { id: 1, name: 'Леонардо ДиКаприо', known_for_department: 'Acting' },
  { id: 2, name: 'Кристофер Нолан', known_for_department: 'Directing' },
  { id: 3, name: 'Скарлетт Йоханссон', known_for_department: 'Acting' },
  { id: 4, name: 'Квентин Тарантино', known_for_department: 'Directing' },
  { id: 5, name: 'Брэд Питт', known_for_department: 'Acting' },
  { id: 6, name: 'Мартин Скорсезе', known_for_department: 'Directing' },
]

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
