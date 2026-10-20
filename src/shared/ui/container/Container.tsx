import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export function Container(props: ContainerProps) {
  const { className = '', children, ...rest } = props

  return (
    <div className={`${styles.container} ${className}`} {...rest}>
      {children}
    </div>
  )
}
