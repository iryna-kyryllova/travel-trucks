import Icon from 'components/Icon/Icon'
import { capitalizeFirstLetter } from 'utils/helpers'
import styles from './EquipmentItem.module.css'

const EquipmentItem = ({ iconName, label }) => {
  return (
    <div className={styles.item}>
      <Icon name={iconName} className={styles.icon} />
      <span className={styles.label}>{capitalizeFirstLetter(label)}</span>
    </div>
  )
}

export default EquipmentItem
