import { formatPrice } from 'utils/helpers'
import styles from './Price.module.css'

const Price = ({ number }) => {
  return <strong className={styles.price}>€{formatPrice(number)}</strong>
}

export default Price
