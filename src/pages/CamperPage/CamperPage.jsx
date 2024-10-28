import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { getCamper } from 'store/camper/operations'
import { selectCamper, selectIsLoadingCamper, selectErrorCamper } from 'store/camper/selectors'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import InfoBlock from 'components/InfoBlock/InfoBlock'
import Price from 'components/Price/Price'
import EquipmentList from 'components/EquipmentList/EquipmentList'
import Rating from 'components/Rating/Rating'
import BookingForm from 'components/BookingForm/BookingForm'
import { capitalizeFirstLetter } from 'utils/helpers'
import styles from './CamperPage.module.css'

const CamperPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const camper = useSelector(selectCamper)
  const isLoadingCamper = useSelector(selectIsLoadingCamper)
  const errorCamper = useSelector(selectErrorCamper)
  let equipment

  useEffect(() => {
    dispatch(getCamper(id))
  }, [dispatch, id])

  if (camper) {
    equipment = {
      transmission: camper.transmission,
      engine: camper.engine,
      AC: camper.AC,
      bathroom: camper.bathroom,
      kitchen: camper.kitchen,
      TV: camper.TV,
      radio: camper.radio,
      refrigerator: camper.refrigerator,
      microwave: camper.microwave,
      gas: camper.gas,
      water: camper.water
    }
  }

  return (
    <>
      {errorCamper && <ErrorMessage message={errorCamper} />}
      {isLoadingCamper && <Loader />}
      {camper && (
        <>
          <div className={styles.header}>
            <h1 className={styles.title}>{camper.name}</h1>
            <InfoBlock rating={camper.rating} reviews={camper.reviews} location={camper.location} />
            <div className={styles.price}>
              <Price number={camper.price} />
            </div>
          </div>
          <ul className={styles.gallery}>
            {camper.gallery.map((image, index) => (
              <li key={index} className={styles.galleryItem}>
                <img src={image.thumb} alt={name} className={styles.galleryImg} />
              </li>
            ))}
          </ul>
          <p className={styles.description}>{camper.description}</p>
          <Tabs className={styles.tabs}>
            <TabList className={styles.tabsTitles}>
              <Tab className={styles.tabsTitle}>Features</Tab>
              <Tab className={styles.tabsTitle}>Reviews</Tab>
            </TabList>
            <div className={styles.tabsHolder}>
              <div className={styles.tabsPanels}>
                <TabPanel className={styles.tabsContent}>
                  <div className={styles.detailsContent}>
                    <EquipmentList items={equipment} />
                    <section className={styles.detailes}>
                      <h2 className={styles.detailesTitle}>Vehicle details</h2>
                      <ul className={styles.detailesList}>
                        <li className={styles.detailesItem}>
                          <span>Form</span>
                          <span>{capitalizeFirstLetter(camper.form)}</span>
                        </li>
                        <li className={styles.detailesItem}>
                          <span>Length</span>
                          <span>{camper.length}</span>
                        </li>
                        <li className={styles.detailesItem}>
                          <span>Width</span>
                          <span>{camper.width}</span>
                        </li>
                        <li className={styles.detailesItem}>
                          <span>Height</span>
                          <span>{camper.height}</span>
                        </li>
                        <li className={styles.detailesItem}>
                          <span>Tank</span>
                          <span>{camper.tank}</span>
                        </li>
                        <li className={styles.detailesItem}>
                          <span>Consumption</span>
                          <span>{camper.consumption}</span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </TabPanel>
                <TabPanel className={styles.tabsContent}>
                  <div className={styles.reviewsContent}>
                    <ul className={styles.reviews}>
                      {camper.reviews.map((review, index) => (
                        <li key={index} className={styles.review}>
                          <div className={styles.reviewHeader}>
                            <span className={styles.reviewAvatar}>
                              {review.reviewer_name.charAt(0).toUpperCase()}
                            </span>
                            <div className={styles.reviewHeadline}>
                              <h3 className={styles.reviewAuthor}>{review.reviewer_name}</h3>
                              <Rating rating={review.reviewer_rating} />
                            </div>
                          </div>
                          <p className={styles.reviewText}>{review.comment}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              </div>
              <section className={styles.booking}>
                <h2 className={styles.bookingTitle}>Book your campervan now</h2>
                <p className={styles.bookingText}>
                  Stay connected! We are always ready to help you.
                </p>
                <BookingForm />
              </section>
            </div>
          </Tabs>
        </>
      )}
    </>
  )
}

export default CamperPage
