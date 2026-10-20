import { baseApi } from '@/shared/api/baseApi'
import type { MovieListResponse } from '../model/types'

const movieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MovieListResponse, void>({
      query: () => ({
        url: '/movie/popular',
        params: {
          language: 'ru-RU',
          page: 1,
        },
      }),
    }),
  }),
})



export const { useGetPopularMoviesQuery } = movieApi
