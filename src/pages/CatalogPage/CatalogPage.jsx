import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampers } from 'store/campers/operations'
import { incrementPage } from 'store/campers/slice'
import {
  selectCampers,
  selectPage,
  selectPagination,
  selectIsLoadingCampers,
  selectErrorCampers
} from 'store/campers/selectors'
import { addToFavorites, removeFromFavorites } from 'store/favorites/slice'
import { selectFavorites } from 'store/favorites/selectors'
import FiltersForm from 'components/FiltersForm/FiltersForm'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import CampersList from 'components/CampersList/CampersList'
import Button from 'components/Button/Button'
import styles from './CatalogPage.module.css'

const CatalogPage = () => {
  const dispatch = useDispatch()

  const campers = useSelector(selectCampers)
  const page = useSelector(selectPage)
  const pagination = useSelector(selectPagination)
  const isLoadingCampers = useSelector(selectIsLoadingCampers)
  const errorCampers = useSelector(selectErrorCampers)
  const favorites = useSelector(selectFavorites)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch, page])

  const handleLoadMore = () => {
    dispatch(incrementPage())
  }

  const handleFavoriteToggle = (camperId) => {
    const isFavorite = favorites.includes(camperId)
    if (isFavorite) {
      dispatch(removeFromFavorites(camperId))
    } else {
      dispatch(addToFavorites(camperId))
    }
  }

  return (
    <>
      <h1 className='sr-only'>Catalog</h1>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <FiltersForm />
        </aside>
        <main className={styles.main}>
          {campers.length > 0 && (
            <CampersList
              data={campers}
              favorites={favorites}
              onFavoriteToggle={handleFavoriteToggle}
            />
          )}
          {campers.length === 0 && !isLoadingCampers && !errorCampers && <p>No campers found.</p>}
          {errorCampers && <ErrorMessage message={errorCampers} />}
          <footer className={styles.footer}>
            {isLoadingCampers ? (
              <div className={styles.loader}>
                <Loader />
              </div>
            ) : (
              campers.length > 0 &&
              pagination && (
                <Button type='button' onClick={handleLoadMore} outlined>
                  Load more
                </Button>
              )
            )}
          </footer>
        </main>
      </div>
    </>
  )
}

export default CatalogPage
