import { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '../button'
import { Input } from '../input'
import { Dialog } from './Dialog'
import styles from './Dialog.stories.module.css'

interface DialogExampleProps {
  label: string
  closeLabel?: string
  className: string
  onClose: () => void
}

function DialogExample(props: DialogExampleProps) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClose() {
    setIsOpen(false)
    props.onClose()
  }

  return (
    <>
      <Button ref={triggerRef} onClick={() => setIsOpen(true)}>Открыть окно</Button>
      {isOpen && (
        <Dialog
          {...props}
          returnFocusRef={triggerRef}
          initialFocusRef={inputRef}
          onClose={handleClose}
        >
          <h2>Поиск фильма</h2>
          <Input ref={inputRef} aria-label="Название фильма" placeholder="Введите название" />
          <Button variant="outline" onClick={handleClose}>Закрыть</Button>
        </Dialog>
      )}
    </>
  )
}

const meta = {
  title: 'Shared/Dialog',
  component: DialogExample,
  tags: ['autodocs'],
  args: {
    label: 'Поиск фильма',
    closeLabel: 'Закрыть окно',
    className: styles.dialog,
    onClose: fn()
  }
} satisfies Meta<typeof DialogExample>

export default meta
type Story = StoryObj<typeof meta>

export const WithCloseButton: Story = {}

export const WithoutCloseButton: Story = {
  args: { closeLabel: undefined }
}
