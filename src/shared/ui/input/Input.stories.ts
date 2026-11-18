import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Input } from './Input'

const meta = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Название фильма',
    placeholder: 'Найти фильм',
    onChange: fn()
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const Filled: Story = {
  args: { defaultValue: 'Солярис' }
}

export const Disabled: Story = {
  args: { defaultValue: 'Солярис', disabled: true }
}
