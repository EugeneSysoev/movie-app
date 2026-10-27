import { tmdbClient } from './tmdbClient'
import type { AxiosRequestConfig } from 'axios'

export async function tmdbRequest<T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> {
  const response = await tmdbClient<T>({
    ...config,
    ...options,
  })

  return response.data
}
