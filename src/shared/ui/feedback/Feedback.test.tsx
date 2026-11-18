import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, test, vi } from 'vitest'
import { Feedback } from './Feedback'

afterEach(cleanup)

test('показывает переданное сообщение без кнопки повтора, если нет onRetry', () => {
  render(<Feedback message="Рецензий пока нет" />)
  expect(screen.getByRole('status').textContent).toBe('Рецензий пока нет')
  expect(screen.queryByRole('button')).toBeNull()
})

test('вызывает onRetry при нажатии на «Повторить запрос»', () => {
  const handleRetry = vi.fn()
  render(<Feedback onRetry={handleRetry} />)
  screen.getByRole('button', { name: 'Повторить запрос' }).click()
  expect(handleRetry).toHaveBeenCalledTimes(1)
})

test('показывает сообщение по умолчанию', () => {
  render(<Feedback />)
  expect(screen.getByRole('status').textContent).toBe('Не удалось загрузить данные')
})
