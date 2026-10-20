import { Input } from '@/shared/ui/input'
import styles from './SearchForm.module.css'
import searchField from '@/shared/assets/icons/search-field.svg'
import { IconButton } from '@/shared/ui/icon-button'
import closeIcon from '@/shared/assets/icons/close.svg'

interface SearchFormProps {
  query: string
  onQueryChange: (value: string) => void
}

export function SearchForm({ query, onQueryChange }: SearchFormProps) {
  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
      <div className={styles.controls}>
        <label className={styles.visuallyHidden} htmlFor="movie-search">
          Поиск фильма
        </label>

        <img src={searchField} alt="" />

        <Input
          className={styles.input}
          autoFocus
          id="movie-search"
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Название фильма , сериала, или имя актёра, режиссёра"
        />

        <IconButton
          type="button"
          aria-label="Очистить поиск"
          onClick={() => onQueryChange('')}
        >
          <img src={closeIcon} alt="" />
        </IconButton>
      </div>
    </form>
  )
}
