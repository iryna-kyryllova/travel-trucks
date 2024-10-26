import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from 'components/Header/Header'
import Loader from 'components/Loader/Loader'
import ContainerLayout from 'layouts/ContainerLayout/ContainerLayout'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'))
const CamperPage = lazy(() => import('pages/CamperPage/CamperPage'))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'))

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader type='page' />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/campers' element={<ContainerLayout />}>
            <Route index element={<CatalogPage />} />
            <Route path=':id' element={<CamperPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position='top-right' />
    </>
  )
}

export default App
