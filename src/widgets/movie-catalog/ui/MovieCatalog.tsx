import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { Button } from '@/shared/ui/button'
import { Loader } from '@/shared/ui/loader'
import { MovieGenreRow, type MovieGenreRowProps } from './MovieGenreRow'
import styles from './MovieCatalog.module.css'

interface MovieCatalogProps {
  rows: MovieGenreRowProps[]
  isLoading: boolean
}

export function MovieCatalog({ rows, isLoading }: MovieCatalogProps) {
  const location = useLocation()
  const catalogRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const catalog = catalogRef.current
    if (location.hash === '#movies' && catalog) {
      catalog.focus({ preventScroll: true })
      catalog.scrollIntoView({ block: 'start' })
    }
  }, [location])

  return (
    <section
      id="movies"
      ref={catalogRef}
      tabIndex={-1}
      className={styles.catalog}
      aria-labelledby="catalog-title"
    >
      <h2 className={styles.title} id="catalog-title">
        Каталог фильмов и сериалов
      </h2>
      <div className={styles.rows} aria-busy={isLoading}>
        {isLoading ? <Loader label="Загрузка каталога" /> : rows.map((row) => (
          <MovieGenreRow key={row.genreId} {...row} />
        ))}
      </div>

      <Button
        className={styles.showAll}
        variant="outline"
        disabled
        title="Полный каталог пока недоступен"
      >
        Посмотреть всё
      </Button>
    </section>
  )
}
