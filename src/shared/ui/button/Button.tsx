import type { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'outline'
}

export function Button(props: ButtonProps) {
  const {
    className = '',
    children,
    variant = 'primary',
    type = 'button',
    ...rest
  } = props

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      data-variant={variant}
      {...rest}
    >
      {children}
    </button>
  )
}
