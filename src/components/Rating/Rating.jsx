import Icon from 'components/Icon/Icon'
import styles from './Rating.module.css'

const Rating = ({ rating, maxStars = 5 }) => {
  const roundedRating = Math.round(rating)
  const fullStars = roundedRating
  const emptyStars = maxStars - fullStars

  return (
    <div className={styles.list}>
      {Array.from({ length: fullStars }).map((_, index) => (
        <Icon key={index} name='star_filled' className={styles.item} />
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Icon key={index} name='star_default' className={styles.item} />
      ))}
    </div>
  )
}

export default Rating
