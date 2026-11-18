import { useState } from 'react'
import { Link } from 'react-router'
import { Image } from '@/shared/ui/image'
import { Feedback } from '@/shared/ui/feedback'
import { Loader } from '@/shared/ui/loader'
import type { SearchCategory } from '../model/searchResults'
import { useSearchResults } from '../model/useSearchResults'
import { SearchPeopleSection } from './SearchPeopleSection'
import styles from './SearchResults.module.css'
import dialogStyles from './SearchDialog.module.css'

interface SearchResultsProps {
  query: string
  category: SearchCategory
  onClose: () => void
}

export function SearchResults(props: SearchResultsProps) {
  const { query, category, onClose } = props
  const [page, setPage] = useState(1)
  const { movies, people, isPending, isFetching, isError, retry, pageCount } =
    useSearchResults(query, category, page)

  if (isPending) return <Loader className={dialogStyles.loader} label="Загрузка результатов" />

  const empty = movies.length === 0 && people.length === 0

  return (
    <div className={styles.groups} aria-busy={isFetching}>
      {movies.length > 0 && (
        <ul className={styles.list} aria-label="Фильмы">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link className={styles.movie} to={`/movies/${movie.id}`} onClick={onClose}>
                <Image className={styles.poster} src={movie.imageUrl} alt="" />
                <span className={styles.movieTitle}>{movie.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {people.length > 0 && (
        <SearchPeopleSection people={people} showTitle={category === 'all'} />
      )}
      {isError && <Feedback message="Не удалось загрузить результаты поиска" isFetching={isFetching} onRetry={retry} />}
      {empty && !isError && (
        <p role="status">
          {query ? 'На этой странице совпадений нет.' : 'Пока нет рекомендаций.'}
        </p>
      )}
      {(page > 1 || pageCount > 1) && (
        <nav aria-label="Страницы результатов" className={styles.pages}>
          <button type="button" disabled={page === 1} onClick={() => setPage(page - 1)}>Назад</button>
          <span aria-current="page">{page}</span>
          <button type="button" disabled={page >= pageCount} onClick={() => setPage(page + 1)}>Далее</button>
        </nav>
      )}
    </div>
  )
}
