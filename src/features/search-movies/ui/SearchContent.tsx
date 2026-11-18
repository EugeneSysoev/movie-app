import { useState } from 'react'
import { Loader } from '@/shared/ui/loader'
import { searchCategories, type SearchCategory } from '../model/searchResults'
import { useSearchTerm } from '../model/useSearchTerm'
import { SearchResults } from './SearchResults'
import chevron from './results-chevron.svg'
import styles from './SearchResults.module.css'
import dialogStyles from './SearchDialog.module.css'

interface SearchContentProps {
  query: string
  onClose: () => void
}

export default function SearchContent({ query: input, onClose }: SearchContentProps) {
  const { query, isTyping } = useSearchTerm(input)
  const [filter, setFilter] = useState<SearchCategory>('all')
  const category = query ? filter : 'all'

  return (
    <div className={styles.wrap}>
      {query ? (
        <label className={styles.filter}>
          <span aria-hidden="true">{searchCategories[category]}</span>
          <img src={chevron} alt="" />
          <select
            aria-label="Категория результатов поиска"
            value={category}
            onChange={(event) => setFilter(event.target.value as SearchCategory)}
          >
            {Object.entries(searchCategories).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      ) : (
        <h2 className={styles.title}>Часто ищут</h2>
      )}
      {isTyping ? (
        <Loader className={dialogStyles.loader} label="Поиск" />
      ) : (
        <SearchResults key={`${category}:${query}`} query={query} category={category} onClose={onClose} />
      )}
    </div>
  )
}
