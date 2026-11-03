import styles from './Logo.module.css'
import { Link } from 'react-router'

export function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      Кино<span className={styles.logoAccent}>Дом</span>
    </Link>
  )
}
