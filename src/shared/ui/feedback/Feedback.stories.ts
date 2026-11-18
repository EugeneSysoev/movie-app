import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Feedback } from './Feedback'

const meta = {
  title: 'Shared/Feedback',
  component: Feedback,
  tags: ['autodocs']
} satisfies Meta<typeof Feedback>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Empty: Story = {
  args: { message: 'Рецензий пока нет' }
}

export const WithRetry: Story = {
  args: { onRetry: fn() }
}

export const Retrying: Story = {
  args: { onRetry: fn(), isFetching: true }
}
