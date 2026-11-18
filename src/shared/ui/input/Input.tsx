import type { ComponentPropsWithoutRef, Ref } from 'react'
import styles from './Input.module.css'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  ref?: Ref<HTMLInputElement>
}

export function Input(props: InputProps) {
  const { className = '', type = 'text', ...rest } = props

  return (
    <input className={`${styles.input} ${className}`} type={type} {...rest} />
  )
}
