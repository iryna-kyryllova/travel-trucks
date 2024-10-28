import Icon from 'components/Icon/Icon'
import styles from './FiltersItem.module.css'

const FiltersItem = ({ id, inputType, filterName, filterValue = true, iconName, children }) => {
  return (
    <div className={styles.button}>
      <input type={inputType} id={id} className='sr-only' name={filterName} value={filterValue} />
      <label htmlFor={id} className={styles.label}>
        <Icon name={iconName} className={styles.icon} />
        {children}
      </label>
    </div>
  )
}

export default FiltersItem
