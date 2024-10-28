import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { setFilters } from 'store/filters/slice'
import Icon from 'components/Icon/Icon'
import FiltersItem from 'components/FiltersItem/FiltersItem'
import Button from 'components/Button/Button'
import styles from './FiltersForm.module.css'

const FiltersForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}

    formData.forEach((value, key) => {
      // If key exists, convert value to array
      if (key in data) {
        if (Array.isArray(data[key])) {
          data[key].push(value)
        } else {
          data[key] = [data[key], value]
        }
      } else {
        data[key] = value
      }
    })

    // delete empty strings
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === 'string' && data[key].trim() === '') {
        delete data[key]
      }
    })

    if (Object.keys(data).length === 0) {
      toast.error('Please choose at least one filter.')
      return
    }

    console.log(data)
    dispatch(setFilters(data))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.location}>
        <label htmlFor={location} className={styles.locationLabel}>
          Location
        </label>
        <div className={styles.locationField}>
          <input
            type='text'
            id={location}
            name='location'
            placeholder='City'
            className={styles.locationInput}
          />
          <Icon name='map' className={styles.locationIcon} />
        </div>
      </div>

      <h2 className={styles.title}>Filters</h2>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Vehicle equipment</legend>
        <div className={styles.filtersList}>
          <FiltersItem
            id='transmission-automatic'
            inputType='checkbox'
            filterName='transmission'
            filterValue='automatic'
            iconName='diagram'>
            Automatic
          </FiltersItem>
          <FiltersItem
            id='transmission-manual'
            inputType='checkbox'
            filterName='transmission'
            filterValue='manual'
            iconName='diagram'>
            Manual
          </FiltersItem>
          <FiltersItem
            id='engine-manual'
            inputType='checkbox'
            filterName='engine'
            filterValue='diesel'
            iconName='fuel'>
            Diesel
          </FiltersItem>
          <FiltersItem
            id='engine-petrol'
            inputType='checkbox'
            filterName='engine'
            filterValue='petrol'
            iconName='fuel'>
            Petrol
          </FiltersItem>
          <FiltersItem
            id='engine-hybrid'
            inputType='checkbox'
            filterName='engine'
            filterValue='hybrid'
            iconName='fuel'>
            Hybrid
          </FiltersItem>
          <FiltersItem id='ac' inputType='checkbox' filterName='AC' iconName='wind'>
            AC
          </FiltersItem>
          <FiltersItem id='bathroom' inputType='checkbox' filterName='bathroom' iconName='shower'>
            Bathroom
          </FiltersItem>
          <FiltersItem id='kitchen' inputType='checkbox' filterName='kitchen' iconName='cup'>
            Kitchen
          </FiltersItem>
          <FiltersItem id='tv' inputType='checkbox' filterName='TV' iconName='tv'>
            TV
          </FiltersItem>
          <FiltersItem id='radio' inputType='checkbox' filterName='radio' iconName='radios'>
            Radio
          </FiltersItem>
          <FiltersItem
            id='refrigerator'
            inputType='checkbox'
            filterName='refrigerator'
            iconName='fridge'>
            Refrigerator
          </FiltersItem>
          <FiltersItem
            id='microwave'
            inputType='checkbox'
            filterName='microwave'
            iconName='microwave'>
            Microwave
          </FiltersItem>
          <FiltersItem id='gas' inputType='checkbox' filterName='gas' iconName='gas'>
            Gas
          </FiltersItem>
          <FiltersItem id='water' inputType='checkbox' filterName='water' iconName='water'>
            Water
          </FiltersItem>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Vehicle type</legend>
        <div className={styles.filtersList}>
          <FiltersItem
            id='form-panelTruck'
            inputType='radio'
            filterName='form'
            filterValue='panelTruck'
            iconName='grid_3'>
            Van
          </FiltersItem>
          <FiltersItem
            id='form-fullyIntegrated'
            inputType='radio'
            filterName='form'
            filterValue='fullyIntegrated'
            iconName='grid_4'>
            Fully Integrated
          </FiltersItem>
          <FiltersItem
            id='form-alcove'
            inputType='radio'
            filterName='form'
            filterValue='alcove'
            iconName='grid_9'>
            Alcove
          </FiltersItem>
        </div>
      </fieldset>

      <Button type='submit' className={styles.submit}>
        Search
      </Button>
    </form>
  )
}

export default FiltersForm
