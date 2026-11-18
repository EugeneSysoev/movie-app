import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Slider } from './Slider'
import styles from './Slider.stories.module.css'

const slides = ['Драма', 'Комедия', 'Фантастика', 'Триллер', 'Приключения'].map(
  (genre) => <div key={genre} className={styles.card}>{genre}</div>
)

const meta = {
  title: 'Shared/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    children: slides,
    slidesPerView: 2,
    spaceBetween: 20,
    keyboardEnabled: true,
    onIndexChange: fn(),
    a11yConfig: {
      containerMessage: 'Жанры фильмов',
      nextSlideMessage: 'Следующий жанр',
      slideLabelMessage: '{{index}} из {{slidesLength}}'
    },
    classNames: {
      slider: styles.slider,
      slides: styles.slides,
      slide: styles.slide,
      nextButton: styles.nextButton
    }
  },
  argTypes: {
    children: { control: false },
    classNames: { control: false }
  }
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Loop: Story = {}

export const Rewind: Story = {
  args: { rewind: true }
}

export const SingleSlide: Story = {
  args: { children: slides.slice(0, 1), slidesPerView: 1 }
}
