import {
  type MovieCredits200CrewItem,
  type MovieCredits200CastItem,
} from '@/shared/api/generated/model'

export function getMovieDirectors(
  crew: MovieCredits200CrewItem[] = [],
): string[] {
  return crew
    .filter((member) => member.job === 'Director')
    .map((member) => member.name)
    .filter((name) => name !== undefined)
}

export function getMovieActors(cast: MovieCredits200CastItem[] = []): string[] {
  return cast
    .map((member) => member.name)
    .filter((name) => name !== undefined)
    .filter((name) => !/[a-z]/i.test(name))
    .slice(0, 10)
}
