import styles from './Logo.module.css'
import { Link } from 'react-router'

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className={styles.logo} onClick={onClick}>
      Кино<span className={styles.logoAccent}>Дом</span>
    </Link>
  )
}
