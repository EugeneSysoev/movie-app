import { Input } from '@/shared/ui/input'
import styles from './SearchForm.module.css'
import searchField from '@/shared/assets/icons/search-field.svg'
import { IconButton } from '@/shared/ui/icon-button'
import closeIcon from '@/shared/assets/icons/close.svg'

interface SearchFormProps {
  query: string
  onQueryChange: (value: string) => void
  onClose: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
}

export function SearchForm(props: SearchFormProps) {
  const { query, onQueryChange, inputRef, onClose } = props

  return (
    <form className={styles.form} role="search" onSubmit={(event) => event.preventDefault()}>
      <div className={styles.controls}>
        <label className={styles.visuallyHidden} htmlFor="movie-search">
          Название фильма или имя актёра, режиссёра
        </label>

        <img src={searchField} alt="" />

        <Input
          className={styles.input}
          id="movie-search"
          type="text"
          ref={inputRef}
          autoComplete="off"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Название фильма или имя актёра, режиссёра"
        />

        <IconButton
          type="button"
          aria-label={query ? 'Очистить поиск' : 'Закрыть поиск'}
          onClick={() => {
            if (!query) {
              onClose()
              return
            }
            onQueryChange('')
            inputRef.current?.focus()
          }}
        >
          <img className={styles.closeIcon} src={closeIcon} alt="" />
        </IconButton>
      </div>
    </form>
  )
}
