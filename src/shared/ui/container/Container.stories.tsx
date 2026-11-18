import type { Meta, StoryObj } from '@storybook/react-vite'
import { Container } from './Container'
import styles from './Container.stories.module.css'

const meta = {
  title: 'Shared/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    children: <p className={styles.content}>Содержимое контейнера</p>
  },
  argTypes: { children: { control: false } }
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
