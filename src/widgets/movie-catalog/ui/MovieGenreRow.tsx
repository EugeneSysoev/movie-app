import { MovieCard } from '@/entities/movie'
import { Feedback } from '@/shared/ui/feedback'
import { Slider } from '@/shared/ui/slider'
import { getCatalogA11yConfig } from '../config/catalog'
import styles from './MovieGenreRow.module.css'
import sliderStyles from './MovieSlider.module.css'
import { Link } from 'react-router'
import { useState } from 'react'
import type { CatalogMovie } from '../model/movies'

export interface MovieGenreRowProps {
  genreId: number
  title: string
  movies: CatalogMovie[]
  isError: boolean
  isFetching: boolean
  onRetry: () => void
}

export function MovieGenreRow(props: MovieGenreRowProps) {
  const { genreId, title, movies, isError, isFetching, onRetry } = props

  const [allowedMovieIds, setAllowedMovieIds] = useState<number[]>([])

  const headingId = `movie-genre-${genreId}`

  const handleIndexChange = (index: number) => {
    const circularMovies = [...movies, ...movies]
    const visibleMovies = circularMovies.slice(index, index + 4)
    const visibleMovieIds = visibleMovies.map((movie) => movie.id)

    setAllowedMovieIds((previousIds) => {
      const newIds = visibleMovieIds.filter((id) => !previousIds.includes(id))
      if (newIds.length === 0) return previousIds
      return [...previousIds, ...newIds]
    })
  }

  return (
    <section aria-labelledby={headingId} aria-busy={isFetching}>
      <h3 className={styles.title} id={headingId}>
        {title}
      </h3>

      {isError && (
        <Feedback onRetry={onRetry} isFetching={isFetching} />
      )}
      {!isError && movies.length === 0 && (
        <Feedback message="В этом разделе пока нет фильмов." />
      )}

      {movies.length > 0 && (
        <Slider
          classNames={{
            slider: sliderStyles.slider,
            slides: sliderStyles.slides,
            slide: sliderStyles.slide,
            nextButton: sliderStyles.nextButton
          }}
          a11yConfig={getCatalogA11yConfig(title)}
          slidesPerView={4}
          spaceBetween={20}
          onIndexChange={handleIndexChange}
        >
          {movies.map((movie, index) => (
            <Link
              className={styles.movieLink}
              key={movie.id}
              to={`/movies/${movie.id}`}
              aria-label={movie.title}
            >
              <MovieCard
                title={movie.title}
                imagePath={movie.imagePath}
                media="movie"
                rating={movie.rating}
                genres={movie.genres}
                canLoad={index < 4 || allowedMovieIds.includes(movie.id)}
              />
            </Link>
          ))}
        </Slider>
      )}
    </section>
  )
}
