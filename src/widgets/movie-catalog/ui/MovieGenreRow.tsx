import { MovieCard } from '@/entities/movie'
import { useDiscoverMovie } from '@/shared/api/generated/endpoints'
import type { GenreMovieList200GenresItem } from '@/shared/api/generated/model/genreMovieList200GenresItem'
import { CATALOG_DISCOVER_PARAMS } from '../config/catalog'
import { getCatalogMovies } from '../model/movies'
import { CatalogFeedback } from './CatalogFeedback'
import { Slider } from '@/shared/ui/slider'
import { getCatalogA11yConfig } from '../config/catalog'
import styles from './MovieGenreRow.module.css'
import sliderStyles from './MovieSlider.module.css'

interface MovieGenreRowProps {
  genreId: number
  title: string
  genres: GenreMovieList200GenresItem[]
}

export function MovieGenreRow({ genreId, title, genres }: MovieGenreRowProps) {
  const { data, isPending, isError, isFetching, refetch } = useDiscoverMovie({
    ...CATALOG_DISCOVER_PARAMS,
    with_genres: String(genreId),
  })
  const movies = getCatalogMovies(data?.results, genres)
  const headingId = `movie-genre-${genreId}`

  return (
    <section aria-labelledby={headingId} aria-busy={isPending}>
      <h3 className={styles.title} id={headingId}>
        {title}
      </h3>

      {isPending && <CatalogFeedback message="Загружаем фильмы…" />}
      {isError && (
        <CatalogFeedback
          message="Не удалось загрузить фильмы."
          onRetry={() => void refetch()}
          isFetching={isFetching}
        />
      )}
      {!isPending && !isError && movies.length === 0 && (
        <CatalogFeedback
          message="В этом разделе пока нет фильмов."
          onRetry={() => void refetch()}
          isFetching={isFetching}
        />
      )}

      {movies.length > 0 && (
        <Slider
          a11yConfig={getCatalogA11yConfig(title)}
          slidesPerView={4}
          spaceBetween={20}
          classNames={{
            slider: sliderStyles.slider,
            slides: sliderStyles.slides,
            slide: sliderStyles.slide,
            nextButton: sliderStyles.nextButton,
          }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imagePath={movie.imagePath}
              media="movie"
              rating={movie.rating}
              genres={movie.genres}
            />
          ))}
        </Slider>
      )}
    </section>
  )
}
