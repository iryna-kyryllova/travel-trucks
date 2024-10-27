import CamperCard from 'components/CamperCard/CamperCard'
import styles from './CampersList.module.css'

const CampersList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id}>
          <CamperCard data={item} />
        </li>
      ))}
    </ul>
  )
}

export default CampersList
