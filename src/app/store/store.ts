import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware()

    const allMiddleware = defaultMiddleware.concat(baseApi.middleware)

    return allMiddleware
  },
})
