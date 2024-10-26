import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from 'components/Header/Header'
import Loader from 'components/Loader/Loader'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'))
const CamperPage = lazy(() => import('pages/CamperPage/CamperPage'))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'))

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/campers' element={<CatalogPage />} />
          <Route path='/campers/:id' element={<CamperPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position='top-right' />
    </>
  )
}

export default App
