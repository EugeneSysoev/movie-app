import { Feedback } from '@/shared/ui/feedback'
import { Loader } from '@/shared/ui/loader'
import { useMovieTrailer } from '../model/useMovieTrailer'
import styles from './TrailerDialog.module.css'

interface TrailerContentProps {
  movieId: number
  movieTitle: string
}

export default function TrailerContent({ movieId, movieTitle }: TrailerContentProps) {
  const { trailerKey, isPending, isError, isFetching, refetch } = useMovieTrailer(movieId)

  if (trailerKey) {
    return (
      <iframe
        className={styles.player}
        title={`Трейлер фильма «${movieTitle}»`}
        src={`https://www.youtube.com/embed/${encodeURIComponent(trailerKey)}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  if (isError) return <Feedback isFetching={isFetching} onRetry={() => void refetch()} />
  if (isPending) return <Loader label="Загрузка трейлера" className={styles.loading} />
  return <Feedback message="Трейлер отсутствует" />
}
