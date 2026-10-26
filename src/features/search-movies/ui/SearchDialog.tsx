import { useEffect, useRef, useState } from 'react'
import type { SyntheticEvent } from 'react'
import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'
import { Button } from '@/shared/ui/button'
import { SearchForm } from './SearchForm'
import { SearchPeopleSection } from './SearchPeopleSection'
import styles from './SearchDialog.module.css'

interface SearchDialogProps {
  onClose: () => void
}

export function SearchDialog({ onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    dialog.showModal()
    searchInputRef.current?.focus()

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
          <SearchForm
            query={query}
            onQueryChange={setQuery}
            inputRef={searchInputRef}
          />
          <Button className={styles.login} variant="outline" disabled>
            Войти
          </Button>
        </div>

        <SearchPeopleSection />
      </Container>
    </dialog>
  )
}
