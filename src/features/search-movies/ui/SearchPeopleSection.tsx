import { PersonItem, type Person } from '@/entities/person'
import styles from './SearchResults.module.css'

interface SearchPeopleSectionProps {
  people: Person[]
  showTitle: boolean
}

export function SearchPeopleSection({ people, showTitle }: SearchPeopleSectionProps) {
  return (
    <section aria-label="Актёры и режиссёры">
      {showTitle && <h3 className={styles.peopleTitle}>Актёры и режиссёры</h3>}
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
