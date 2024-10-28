import { Link } from 'react-router-dom'
import Button from 'components/Button/Button'
import Price from '../Price/Price'
import Icon from 'components/Icon/Icon'
import InfoBlock from 'components/InfoBlock/InfoBlock'
import EquipmentList from 'components/EquipmentList/EquipmentList'
import styles from './CamperCard.module.css'

const CamperCard = (props) => {
  const {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water
  } = props.data

  const equipment = {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water
  }

  return (
    <article className={styles.card}>
      <Link to={`/campers/${id}`} className={styles.imgHolder}>
        <img src={gallery[0].thumb} className={styles.img} alt={name} />
      </Link>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.actions}>
            <Price number={price} />
            <button type='button' className={styles.favoriteBtn}>
              <Icon name='heart' className={styles.favoriteIcon} />
            </button>
          </div>
        </div>
        <InfoBlock rating={rating} reviews={reviews} location={location} />
        <p className={styles.description}>{description}</p>
        <EquipmentList items={equipment} />
        <Button as='link' to={`/campers/${id}`} className={styles.btn}>
          Show more
        </Button>
      </div>
    </article>
  )
}

export default CamperCard
