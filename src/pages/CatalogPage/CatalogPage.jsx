import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampers } from 'store/campers/operations'
import { selectCampers, selectIsLoadingCampers, selectErrorCampers } from 'store/campers/selectors'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import CampersList from 'components/CampersList/CampersList'
import Button from 'components/Button/Button'
import styles from './CatalogPage.module.css'

const CatalogPage = () => {
  const dispatch = useDispatch()

  const campers = useSelector(selectCampers)
  const isLoadingCampers = useSelector(selectIsLoadingCampers)
  const errorCampers = useSelector(selectErrorCampers)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  return (
    <>
      <h1 className='sr-only'>Catalog</h1>
      <div className={styles.layout}>
        <aside>Sidebar</aside>
        <main>
          {errorCampers && <ErrorMessage message={errorCampers} />}
          {campers.length > 0 && <CampersList data={campers} />}
          {campers.length === 0 && !isLoadingCampers && !errorCampers && <p>No campers found.</p>}
          {isLoadingCampers && <Loader />}
          <Button type='button' className={styles.loadMore}>
            Load more
          </Button>
        </main>
      </div>
    </>
  )
}

export default CatalogPage
