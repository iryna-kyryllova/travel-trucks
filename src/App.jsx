import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'))
const CamperPage = lazy(() => import('pages/CamperPage/CamperPage'))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'))

const App = () => {
  return (
    <Suspense fallback='Loading'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/campers' element={<CatalogPage />} />
        <Route path='/campers/:id' element={<CamperPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
