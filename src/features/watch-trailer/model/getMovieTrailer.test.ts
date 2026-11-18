import { expect, test } from 'vitest'
import { getMovieTrailer } from './getMovieTrailer'

test('возвращает undefined, если список видео пуст', () => {
  expect(getMovieTrailer([])).toBeUndefined()
})

test('возвращает трейлер на английском, если русского нет', () => {
  const videos = [
    {
      iso_639_1: 'en',
      key: 'en_trailer_key',
      type: 'Trailer',
      site: 'YouTube'
    }
  ]
  expect(getMovieTrailer(videos)).toBe('en_trailer_key')
})

test('возвращает трейлер на русском языке, когда есть трейлеры на обеих языках', () => {
  const videos = [
    {
      iso_639_1: 'en',
      key: 'en_trailer_key',
      type: 'Trailer',
      site: 'YouTube'
    },
    {
      iso_639_1: 'ru',
      key: 'ru_trailer_key',
      type: 'Trailer',
      site: 'YouTube'
    }
  ]
  expect(getMovieTrailer(videos)).toBe('ru_trailer_key')
})
