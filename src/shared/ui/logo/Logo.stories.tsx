import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import { fn } from 'storybook/test'
import { Logo } from './Logo'

const meta = {
  title: 'Shared/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: { onClick: fn() },
  decorators: [
    (Story) => <MemoryRouter><Story /></MemoryRouter>
  ]
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
