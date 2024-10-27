import { Link } from 'react-router-dom'
import Button from 'components/Button/Button'
import styles from './CamperCard.module.css'

const CamperCard = (props) => {
  const { id, gallery, name, price, rating, reviews, location, description } = props.data

  return (
    <article className={styles.card}>
      <Link to={`/campers/${id}`} className={styles.imgHolder}>
        <img src={gallery[0].thumb} className={styles.img} alt={name} />
      </Link>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.actions}>
            <strong className={styles.price}>€{price}</strong>
            <button className={styles.favoriteBtn}>O</button>
          </div>
          <div className={styles.info}>
            <span>
              {rating}({reviews.length} Reviews)
            </span>
            <span>{location}</span>
          </div>
          <p className={styles.description}>{description}</p>
          <ul className={styles.equipment}>
            <li>Equipment</li>
          </ul>
          <Button as='link' to={`/campers/${id}`} className={styles.btn}>
            Show more
          </Button>
        </div>
      </div>
    </article>
  )
}

export default CamperCard
