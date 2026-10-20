import type { ComponentPropsWithoutRef } from 'react'
import styles from './Input.module.css'

type InputProps = ComponentPropsWithoutRef<'input'>

export function Input(props: InputProps) {
  const { className = '', type = 'text', ...rest } = props

  return (
    <input className={`${styles.input} ${className}`} type={type} {...rest} />
  )
}
