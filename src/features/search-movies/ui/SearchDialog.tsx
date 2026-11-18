import { lazy, Suspense, useRef, useState, type RefObject } from 'react'
import { Dialog } from '@/shared/ui/dialog'
import { Loader } from '@/shared/ui/loader'
import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'
import { Button } from '@/shared/ui/button'
import { SearchForm } from './SearchForm'
import styles from './SearchDialog.module.css'

const SearchContent = lazy(() => import('./SearchContent'))

interface SearchDialogProps {
  returnFocusRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
}

export function SearchDialog({ returnFocusRef, onClose }: SearchDialogProps) {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')

  return (
    <Dialog
      className={styles.dialog}
      label="Поиск фильмов, актёров и режиссёров"
      returnFocusRef={returnFocusRef}
      initialFocusRef={searchInputRef}
      onClose={onClose}
    >
      <Container className={styles.row}>
        <Logo onClick={onClose} />
        <SearchForm query={query} onQueryChange={setQuery} inputRef={searchInputRef} onClose={onClose} />
        <Button className={styles.login} variant="outline" disabled>Войти</Button>
      </Container>
      <div className={styles.resultsPane}>
        <Container>
          <Suspense fallback={<Loader className={styles.loader} label="Загрузка поиска" />}>
            <SearchContent query={query} onClose={onClose} />
          </Suspense>
        </Container>
      </div>
    </Dialog>
  )
}
