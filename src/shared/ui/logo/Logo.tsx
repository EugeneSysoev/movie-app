import styles from './Logo.module.css'

export function Logo() {
  return (
    <a href="/" className={styles.logo}>
      Кино<span className={styles.logoAccent}>Дом</span>
    </a>
  )
}
