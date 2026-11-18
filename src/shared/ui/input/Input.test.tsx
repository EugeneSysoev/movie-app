import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, test, vi } from 'vitest'
import { Input } from './Input'

afterEach(cleanup)

test('показывает введённый текст', async () => {
  const user = userEvent.setup()
  render(<Input aria-label="Название фильма" />)
  const input = screen.getByRole('textbox', { name: 'Название фильма' })
  await user.type(input, 'Солярис')
  expect(screen.getByDisplayValue('Солярис')).toBe(input)
})

test('вызывает onChange при вводе символа', async () => {
  const user = userEvent.setup()
  const handleChange = vi.fn()
  render(<Input aria-label="Название фильма" onChange={handleChange} />)
  await user.type(screen.getByRole('textbox', { name: 'Название фильма' }), 'С')
  expect(handleChange).toHaveBeenCalledTimes(1)
})

test('отключённое поле сохраняет значение и не вызывает onChange', async () => {
  const user = userEvent.setup()
  const handleChange = vi.fn()
  render(<Input aria-label="Название фильма" defaultValue="Солярис" disabled onChange={handleChange} />)
  const input = screen.getByRole('textbox', { name: 'Название фильма' })
  await user.type(input, '2')
  expect(screen.getByDisplayValue('Солярис')).toBe(input)
  expect(handleChange).not.toHaveBeenCalled()
})
