import type { Meta, StoryObj } from '@storybook/react-vite'
import backdrop from '../../../widgets/hero/assets/bg.webp'
import { Image } from './Image'
import styles from './Image.stories.module.css'

const meta = {
  title: 'Shared/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: backdrop,
    alt: 'Обложка фильма',
    className: styles.frame,
    loading: 'eager'
  }
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Loaded: Story = {}

export const Missing: Story = {
  args: { src: null }
}

export const Failed: Story = {
  args: { src: 'data:image/png;base64,broken' }
}

export const Deferred: Story = {
  args: { canLoad: false }
}
