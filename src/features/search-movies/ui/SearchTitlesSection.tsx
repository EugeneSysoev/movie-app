import type { Movie } from '@/entities/movie'
import styles from './SearchResults.module.css'

interface SearchTitlesSectionProps {
  movies: Movie[]
  isLoading: boolean
  isError: boolean
}

export function SearchTitlesSection({
  movies,
  isLoading,
  isError,
}: SearchTitlesSectionProps) {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>Часто ищут</h2>

      {isLoading && <p>Загрузка фильмов…</p>}
      {isError && <p>Не удалось загрузить фильмы.</p>}
      {!isLoading && !isError && movies.length === 0 && (
        <p>Подборка пока пуста.</p>
      )}

      {!isLoading && !isError && movies.length > 0 && (
        <ul className={styles.list}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <article className={styles.movie}>
                {movie.backdrop_path ? (
                  <img
                    className={styles.poster}
                    src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                    alt=""
                  />
                ) : (
                  <div className={`${styles.poster} ${styles.placeholder}`}>
                    Нет изображения
                  </div>
                )}
                <h3 className={styles.movieTitle}>{movie.title}</h3>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
