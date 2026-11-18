import type { ComponentPropsWithRef } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
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
      className={`${styles.button} ${styles[`button--${variant}`]} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
