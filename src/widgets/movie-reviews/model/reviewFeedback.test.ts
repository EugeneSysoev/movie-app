import { expect, test } from 'vitest'
import { validateComment } from './reviewFeedback'

test('возвращает ошибку, если комментарий состоит только из пробелов', () => {
  const result = validateComment('   ')
  expect(result).toBe('Введите комментарий.')
})

test('возвращает ошибку, если комментарий состоит более 2000 символов', () => {
  const result = validateComment('а'.repeat(2001))
  expect(result).toBe('Комментарий должен содержать не больше 2000 символов.')
})

test('принимает комментарий длиной ровно 2000 символов', () => {
  const result = validateComment('а'.repeat(2000))
  expect(result).toBeNull()
})
