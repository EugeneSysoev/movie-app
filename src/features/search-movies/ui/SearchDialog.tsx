import { useEffect, useRef, useState } from 'react'
import type { SyntheticEvent } from 'react'
import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'
import { Button } from '@/shared/ui/button'
import { useGetPopularMoviesQuery } from '@/entities/movie'
import { SearchForm } from './SearchForm'
import { SearchTitlesSection } from './SearchTitlesSection'
import { SearchPeopleSection } from './SearchPeopleSection'
import styles from './SearchDialog.module.css'

interface SearchDialogProps {
  onClose: () => void
}

export function SearchDialog({ onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const { data, isLoading, isError } = useGetPopularMoviesQuery()
  const movies = (data?.results ?? []).slice(0, 6)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    dialog.showModal()
    dialog.querySelector<HTMLInputElement>('#movie-search')?.focus()

    return () => dialog.close()
  }, [])

  function handleCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault()
    dialogRef.current?.close()
    onClose()
  }

  function handleClickCancel(event: SyntheticEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close()
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClickCancel}
      onCancel={handleCancel}
      className={styles.dialog}
      aria-label="Поиск фильмов, сериалов, имён актеров или режиссеров"
    >
      <Container onClick={handleClickCancel}>
        <div className={styles.row}>
          <Logo />
          <SearchForm query={query} onQueryChange={setQuery} />
          <Button className={styles.login} variant="outline" disabled>
            Войти
          </Button>
        </div>

        <SearchTitlesSection
          movies={movies}
          isLoading={isLoading}
          isError={isError}
        />
        <SearchPeopleSection />
      </Container>
    </dialog>
  )
}
