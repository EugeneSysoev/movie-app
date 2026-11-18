interface MovieRatingProps {
  voteAverage?: number
  voteCount?: number
}

export function getMovieRating({ voteAverage, voteCount }: MovieRatingProps) {
  return voteCount === 0 ? undefined : voteAverage
}
