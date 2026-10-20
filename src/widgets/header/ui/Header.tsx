import { Container } from '@/shared/ui/container'
import styles from './Header.module.css'
import { IconButton } from '@/shared/ui/icon-button'
import bellIcon from '@/shared/assets/icons/bell.svg'
import authorizationIcon from '@/shared/assets/icons/authorization.svg'
import { SearchDialog } from '@/features/search-movies'
import { useRef, useState } from 'react'
import { Logo } from '@/shared/ui/logo'

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchButtonRef = useRef<HTMLButtonElement>(null)

  function handleCloseSearch() {
    setIsSearchOpen(false)
    searchButtonRef.current?.focus()
  }

  return (
    <header>
      <Container>
        <div className={styles.row}>
          <div className={styles.wrap}>
            <Logo />
            <nav aria-label="Основная навигация">
              <ul className={styles.nav}>
                <li>
                  <a className={styles.title} href="#movies">
                    Фильмы
                  </a>
                </li>
                <li>
                  <a className={styles.title} href="#series">
                    Сериалы
                  </a>
                </li>
                <li>
                  <button
                    className={`${styles.title} ${styles.buttonReset}`}
                    type="button"
                    disabled
                  >
                    Подборки
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.nav}>
            <IconButton
              className={styles.searchButton}
              aria-expanded={isSearchOpen}
              aria-label="Открыть поиск"
              aria-haspopup="dialog"
              onClick={() => setIsSearchOpen(true)}
              ref={searchButtonRef}
            >
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" />
              </svg>
              <span className={styles.title}>Поиск</span>
            </IconButton>

            <IconButton disabled aria-label="Уведомления">
              <img src={bellIcon} alt="" />
            </IconButton>

            <IconButton disabled aria-label="Войти в личный кабинет">
              <img src={authorizationIcon} alt="" />
            </IconButton>
          </div>
        </div>
      </Container>

      {isSearchOpen && <SearchDialog onClose={handleCloseSearch} />}
    </header>
  )
}
