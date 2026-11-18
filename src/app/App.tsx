import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Route, Routes, useLocation } from 'react-router'
import { lazy, Suspense, useEffect, useRef } from 'react'
import styles from './App.module.css'
import { PageLoader } from '@/shared/ui/page-loader'

const HomePage = lazy(() =>
  import('@/pages/home/ui').then(({ HomePage }) => ({ default: HomePage }))
)
const MoviePage = lazy(() =>
  import('@/pages/movie/ui/MoviePage').then(({ MoviePage }) => ({ default: MoviePage }))
)

function App() {
  const { pathname, hash } = useLocation()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hash) pageRef.current?.scrollIntoView({ block: 'start' })
  }, [pathname, hash])

  return (
    <div className={styles.background} ref={pageRef}>
      <Header />

      <Suspense fallback={
        <main aria-busy="true">
          <PageLoader />
        </main>
      }>
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
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
