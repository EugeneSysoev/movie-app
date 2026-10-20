import type { ComponentPropsWithRef, ReactNode } from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  'aria-label': string
}

export function IconButton(props: IconButtonProps) {
  const { className = '', children, type = 'button', ...rest } = props

  return (
    <button className={`${styles.button} ${className}`} type={type} {...rest}>
      {children}
    </button>
  )
}
