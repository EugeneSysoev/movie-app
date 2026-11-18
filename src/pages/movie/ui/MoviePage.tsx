import { Container } from '@/shared/ui/container'
import { Feedback } from '@/shared/ui/feedback'
import { MovieAbout } from '@/widgets/movie-about'
import { MovieCover } from '@/widgets/movie-cover/ui'
import { lazy } from 'react'
import { MovieRecommendations } from '@/widgets/movie-recommendations'
import { PageLoader } from '@/shared/ui/page-loader'
import { useParams } from 'react-router'
import { useMoviePageData } from '../model/useMoviePageData'
import { DeferredReviews } from './DeferredReviews'

const MovieReviews = lazy(() =>
  import('@/widgets/movie-reviews').then(({ MovieReviews }) => ({ default: MovieReviews }))
)

export function MoviePage() {
  const { movieId } = useParams()
  return <MoviePageContent key={movieId} movieId={movieId} />
}

function MoviePageContent({ movieId }: { movieId: string | undefined }) {
  const {
    numericMovieId,
    isInitialLoading,
    feedbackProps,
    coverProps,
    aboutProps,
    recommendationsProps,
    reviewsProps
  } = useMoviePageData(movieId)

  if (feedbackProps)
    return (
      <main>
        <Container>
          <Feedback {...feedbackProps} />
        </Container>
      </main>
    )

  if (isInitialLoading)
    return (
      <main aria-busy={true}>
        <PageLoader />
      </main>
    )

  return (
    <main>
      <MovieCover {...coverProps} />
      <MovieAbout {...aboutProps}>
        <DeferredReviews>
          <MovieReviews {...reviewsProps} />
        </DeferredReviews>
      </MovieAbout>
      <MovieRecommendations
        key={`recommendations-${numericMovieId}`}
        {...recommendationsProps}
      />
    </main>
  )
}
