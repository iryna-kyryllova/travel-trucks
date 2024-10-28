import Icon from 'components/Icon/Icon'
import styles from './InfoBlock.module.css'

const InfoBlock = ({ rating, reviews, location }) => {
  return (
    <ul className={styles.info}>
      <li className={styles.item}>
        <Icon name='star_filled' className={styles.icon} />
        <span className={styles.reviews}>
          {rating}({reviews.length} Reviews)
        </span>
      </li>
      <li className={styles.item}>
        <Icon name='map' className={styles.icon} />
        <span>{location}</span>
      </li>
    </ul>
  )
}

export default InfoBlock
