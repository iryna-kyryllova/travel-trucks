import EquipmentItem from 'components/EquipmentItem/EquipmentItem'
import styles from './EquipmentList.module.css'

const EquipmentList = (props) => {
  const {
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
  } = props.items

  return (
    <ul className={styles.list}>
      {transmission && (
        <li>
          <EquipmentItem iconName='diagram' label={transmission} />
        </li>
      )}
      {engine && (
        <li>
          <EquipmentItem iconName='fuel' label={engine} />
        </li>
      )}
      {AC && (
        <li>
          <EquipmentItem iconName='wind' label='AC' />
        </li>
      )}
      {bathroom && (
        <li>
          <EquipmentItem iconName='shower' label='bathroom' />
        </li>
      )}
      {kitchen && (
        <li>
          <EquipmentItem iconName='cup' label='kitchen' />
        </li>
      )}
      {TV && (
        <li>
          <EquipmentItem iconName='tv' label='TV' />
        </li>
      )}
      {radio && (
        <li>
          <EquipmentItem iconName='radios' label='radio' />
        </li>
      )}
      {refrigerator && (
        <li>
          <EquipmentItem iconName='fridge' label='refrigerator' />
        </li>
      )}
      {microwave && (
        <li>
          <EquipmentItem iconName='microwave' label='microwave' />
        </li>
      )}
      {gas && (
        <li>
          <EquipmentItem iconName='gas' label='gas' />
        </li>
      )}
      {water && (
        <li>
          <EquipmentItem iconName='water' label='water' />
        </li>
      )}
    </ul>
  )
}

export default EquipmentList
