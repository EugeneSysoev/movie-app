import {
  useMoviePopularList, usePersonPopularList, useSearchMovie, useSearchPerson
} from '@/shared/api/generated/endpoints'
import { TMDB_LANGUAGE_PARAMS } from '@/shared/config'
import { getSearchMovies, getSearchPeople, type SearchCategory } from './searchResults'

export function useSearchResults(query: string, category: SearchCategory, page: number) {
  const popular = query === ''
  const params = { ...TMDB_LANGUAGE_PARAMS, query, page, include_adult: false }
  const popularOptions = { query: { enabled: popular } }
  const popularMovies = useMoviePopularList(TMDB_LANGUAGE_PARAMS, popularOptions)
  const popularPeople = usePersonPopularList(TMDB_LANGUAGE_PARAMS, popularOptions)
  const movieSearch = useSearchMovie(params, { query: { enabled: !popular && category !== 'people' } })
  const personSearch = useSearchPerson(params, { query: { enabled: !popular && category !== 'movies' } })

  const movieQuery = popular ? popularMovies : movieSearch
  const personQuery = popular ? popularPeople : personSearch
  const movies = category === 'people' ? [] : getSearchMovies(movieQuery.data?.results)
  const people = category === 'movies' ? [] : getSearchPeople(personQuery.data?.results)
  const preview = category === 'all'
  const selectedQuery = category === 'movies' ? movieQuery : personQuery
  const activeQueries = preview ? [movieQuery, personQuery] : [selectedQuery]
  const failedQueries = activeQueries.filter((item) => item.isError)

  return {
    movies: preview ? movies.slice(0, 6) : movies,
    people: preview ? people.slice(0, 6) : people,
    isPending: activeQueries.some((item) => item.isPending),
    isFetching: activeQueries.some((item) => item.isFetching),
    isError: failedQueries.length > 0,
    retry: () => failedQueries.forEach((item) => void item.refetch()),
    pageCount: preview ? 1 : Math.min(selectedQuery.data?.total_pages ?? page, 500)
  }
}
