import type { Meta, StoryObj } from '@storybook/react-vite'
import { Loader } from './Loader'

const meta = {
  title: 'Shared/Loader',
  component: Loader,
  tags: ['autodocs'],
  args: { label: 'Загрузка рецензий' }
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
