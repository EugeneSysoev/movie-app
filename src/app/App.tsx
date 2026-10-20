import { MovieCard, useGetPopularMoviesQuery } from '@/entities/movie'
import { Container } from '@/shared/ui/container'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { Benefits } from '@/widgets/benefits'
import { Footer } from '@/widgets/footer'
import styles from './App.module.css'

function App() {
  const { data, isLoading, isError, isSuccess } = useGetPopularMoviesQuery()

  return (
    <div className={styles.background}>
      <Header />

      <main>
        <Hero />
        <Container>
          <Benefits />

          <section id="movies">
            <h2>Каталог фильмов и сериалов</h2>

            {isLoading && <p>Загрузка фильмов…</p>}
            {isError && <p>Не удалось загрузить фильмы.</p>}

            {isSuccess &&
              data &&
              (data.results.length === 0 ? (
                <p>Фильмов пока нет.</p>
              ) : (
                <ul className={styles.movieList}>
                  {data.results.map((movie) => (
                    <li key={movie.id}>
                      <MovieCard
                        title={movie.title}
                        imagePath={movie.backdrop_path}
                        rating={movie.vote_average}
                        media="movie"
                      />
                    </li>
                  ))}
                </ul>
              ))}
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default App
