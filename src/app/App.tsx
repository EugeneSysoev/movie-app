import { Container } from '@/shared/ui/container'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { Benefits } from '@/widgets/benefits'
import { MovieCatalog } from '@/widgets/movie-catalog'
import { Footer } from '@/widgets/footer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.background}>
      <Header />

      <main>
        <Hero />
        <Container>
          <Benefits />
          <MovieCatalog />
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default App
