import { Container } from '@/shared/ui/container'
import { Benefits } from '@/widgets/benefits'
import { Hero } from '@/widgets/hero'
import { MovieCatalog } from '@/widgets/movie-catalog'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Container>
        <Benefits />
        <MovieCatalog />
      </Container>
    </main>
  )
}
