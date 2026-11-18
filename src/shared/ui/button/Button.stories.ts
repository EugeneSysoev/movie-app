import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Открыть',
    variant: 'primary'
  }
}

export const Outline: Story = {
  args: {
    children: 'Открыть',
    variant: 'outline'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Открыть',
    variant: 'primary',
    disabled: true
  }
}
