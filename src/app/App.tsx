import { HomePage } from '@/pages/home/ui'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Route, Routes, useLocation } from 'react-router'
import { useEffect, useRef } from 'react'
import styles from './App.module.css'
import { MoviePage } from '@/pages/movie/ui/MoviePage'

function App() {
  const { pathname } = useLocation()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    pageRef.current?.scrollIntoView({ block: 'start' })
  }, [pathname])

  return (
    <div className={styles.background} ref={pageRef}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
        <Route
          path="*"
          element={
            <main>
              <h1>404 Страница не найдена</h1>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
