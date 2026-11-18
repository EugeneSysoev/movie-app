import type { Person } from '@/entities/person'
import type { SearchMovie200ResultsItem, SearchPerson200ResultsItem } from '@/shared/api/generated/model'
import { TMDB_IMAGE_URLS } from '@/shared/config'

export const searchCategories = {
  all: 'Все результаты',
  movies: 'Фильмы',
  people: 'Актёры и режиссёры'
} as const

export type SearchCategory = keyof typeof searchCategories

export function getSearchMovies(results: SearchMovie200ResultsItem[] = []) {
  return results.flatMap((movie) => {
    const title = movie.title?.trim() || movie.original_title?.trim()
    if (!movie.id || !title) return []

    let imageUrl = null
    if (movie.backdrop_path) imageUrl = TMDB_IMAGE_URLS.w300 + movie.backdrop_path
    else if (movie.poster_path) imageUrl = TMDB_IMAGE_URLS.w342 + movie.poster_path

    return [{ id: movie.id, title, imageUrl }]
  })
}

type PersonResult = Pick<SearchPerson200ResultsItem, 'id' | 'name' | 'original_name' | 'known_for_department'>

export function getSearchPeople(results: PersonResult[] = []): Person[] {
  return results.flatMap((person) => {
    const department = person.known_for_department
    const name = person.name?.trim() || person.original_name?.trim()
    if (!person.id || !name || (department !== 'Acting' && department !== 'Directing')) return []

    return [{ id: person.id, name, known_for_department: department }]
  })
}
