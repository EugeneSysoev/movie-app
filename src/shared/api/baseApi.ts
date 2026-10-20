import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'tmdbApi',

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TMDB_API_BASE_URL,

    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
      )

      return headers
    },
  }),

  endpoints: () => ({}),
})
