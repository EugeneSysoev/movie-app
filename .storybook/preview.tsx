import type { Preview } from '@storybook/react-vite'
import '../src/app/styles/global.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        kinodom: { name: 'КиноДом', value: '#141025' },
        light: { name: 'Светлый', value: '#ffffff' }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      test: 'todo'
    }
  },
  initialGlobals: {
    backgrounds: { value: 'kinodom' }
  }
}

export default preview
