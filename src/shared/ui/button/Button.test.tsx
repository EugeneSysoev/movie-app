import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, test, vi } from 'vitest'
import { Button } from './Button'

afterEach(cleanup)

test('вызывает onClick один раз при нажатии', () => {
  const handleClick = vi.fn()
  render(<Button onClick={handleClick}>Открыть</Button>)
  const button = screen.getByRole('button', { name: 'Открыть' })
  button.click()
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('не вызывает onClick при нажатии на отключённую кнопку', () => {
  const handleClick = vi.fn()
  render(<Button disabled onClick={handleClick}>Открыть</Button>)
  screen.getByRole('button', { name: 'Открыть' }).click()
  expect(handleClick).not.toHaveBeenCalled()
})

test('по умолчанию имеет тип button', () => {
  render(<Button>Открыть</Button>)
  const button = screen.getByRole('button', { name: 'Открыть' })
  expect(button.getAttribute('type')).toBe('button')
})
