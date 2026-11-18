import { useLayoutEffect, useRef, type ReactNode, type RefObject } from 'react'
import { IconButton } from '../icon-button'
import styles from './Dialog.module.css'

interface DialogProps {
  children: ReactNode
  className: string
  label: string
  closeLabel?: string
  returnFocusRef: RefObject<HTMLButtonElement | null>
  initialFocusRef?: RefObject<HTMLElement | null>
  onClose: () => void
}

export function Dialog(props: DialogProps) {
  const {
    children,
    className,
    label,
    closeLabel,
    returnFocusRef,
    initialFocusRef,
    onClose
  } = props

  const dialogRef = useRef<HTMLDialogElement>(null)

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    const trigger = returnFocusRef.current
    if (!dialog) return

    dialog.showModal()
    initialFocusRef?.current?.focus()

    return () => {
      dialog.close()
      if (trigger?.isConnected) trigger.focus()
    }
  }, [initialFocusRef, returnFocusRef])

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.dialog} ${className}`}
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {closeLabel && (
        <IconButton className={styles.closeButton} aria-label={closeLabel} onClick={onClose}>
          <span className={styles.closeIcon} aria-hidden="true" />
        </IconButton>
      )}
      {children}
    </dialog>
  )
}
