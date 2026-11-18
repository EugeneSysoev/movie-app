import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'
import styles from './Loader.module.css'

interface LoaderProps {
  label: string
  className?: string
}

export function Loader({ label, className = '' }: LoaderProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`${styles.loader} ${className}`}
    >
      <Tailspin size={56} stroke={4} speed={0.9} color="var(--color-accent)" />
    </div>
  )
}
