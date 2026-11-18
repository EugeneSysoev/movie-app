import { expect, test } from 'vitest'
import { getMovieRating } from './getMovieRating'

test('возвращает среднюю оценку, если есть голоса', () => {
  const result = getMovieRating({ voteAverage: 8, voteCount: 10 })
  expect(result).toBe(8)
})

test('возвращает undefined, если нет голосов', () => {
  const result = getMovieRating({ voteAverage: 8, voteCount: 0 })
  expect(result).toBeUndefined()
})

test('сохраняет нулевую среднюю оценку, если есть голоса', () => {
  const result = getMovieRating({ voteAverage: 0, voteCount: 10 })
  expect(result).toBe(0)
})
