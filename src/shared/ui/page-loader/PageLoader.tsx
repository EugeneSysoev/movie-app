import { Loader } from '../loader/Loader'
import styles from './PageLoader.module.css'

export function PageLoader() {
  return <Loader label="Загрузка страницы" className={styles.wrap} />
}
