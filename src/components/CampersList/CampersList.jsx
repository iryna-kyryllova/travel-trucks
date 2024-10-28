import CamperCard from 'components/CamperCard/CamperCard'
import styles from './CampersList.module.css'

const CampersList = ({ data }) => {
  return (
    <section>
      <h2 className='sr-only'>Campers</h2>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id}>
            <CamperCard data={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CampersList
