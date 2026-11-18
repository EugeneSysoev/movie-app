import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import searchIcon from '../../assets/icons/search.svg'
import { IconButton } from './IconButton'

const meta = {
  title: 'Shared/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Открыть поиск',
    children: <img src={searchIcon} alt="" width={24} height={24} />,
    onClick: fn()
  },
  argTypes: { children: { control: false } }
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true }
}
