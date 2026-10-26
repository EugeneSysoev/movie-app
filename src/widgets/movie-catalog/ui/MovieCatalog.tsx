import { useGenreMovieList } from '@/shared/api/generated/endpoints'
import { Button } from '@/shared/ui/button'
import { CATALOG_GENRE_PARAMS, CATALOG_ROWS } from '../config/catalog'
import { CatalogFeedback } from './CatalogFeedback'
import { MovieGenreRow } from './MovieGenreRow'
import styles from './MovieCatalog.module.css'

export function MovieCatalog() {
  const { data, isPending, isError, isFetching, refetch } =
    useGenreMovieList(CATALOG_GENRE_PARAMS)

  const genres = data?.genres ?? []

  return (
    <section
      id="movies"
      className={styles.catalog}
      aria-labelledby="catalog-title"
    >
      <h2 className={styles.title} id="catalog-title">
        Каталог фильмов и сериалов
      </h2>
      {isError && (
        <CatalogFeedback
          message="Не удалось загрузить жанры."
          onRetry={() => void refetch()}
          isFetching={isFetching}
        />
      )}
      {!isPending && !isError && genres.length === 0 && (
        <CatalogFeedback
          message="Список жанров пока недоступен."
          onRetry={() => void refetch()}
          isFetching={isFetching}
        />
      )}

      {genres.length > 0 && (
        <div className={styles.rows}>
          {CATALOG_ROWS.map((row) => (
            <MovieGenreRow
              key={row.genreId}
              genreId={row.genreId}
              title={row.title}
              genres={genres}
            />
          ))}
        </div>
      )}

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
