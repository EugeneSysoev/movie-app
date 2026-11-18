import { Container } from '@/shared/ui/container'
import { Benefits } from '@/widgets/benefits'
import { Hero, HeroSlider } from '@/widgets/hero'
import { MovieCatalog } from '@/widgets/movie-catalog'
import { useHomePageData } from '../model/useHomePageData'

export function HomePage() {
  const {
    slides,
    upcomingQuery,
    catalogRows,
    isCatalogLoading
  } = useHomePageData()

  return (
    <main>
      <Hero>
        <HeroSlider
          slides={slides}
          isPending={upcomingQuery.isPending}
          isError={upcomingQuery.isError}
          isFetching={upcomingQuery.isFetching}
          onRetry={() => void upcomingQuery.refetch()}
        />
      </Hero>
      <Container>
        <Benefits />
        <MovieCatalog rows={catalogRows} isLoading={isCatalogLoading} />
      </Container>
    </main>
  )
}
