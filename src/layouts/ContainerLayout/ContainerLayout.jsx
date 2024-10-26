import { Outlet } from 'react-router-dom'
import Container from 'components/Container/Container'
import styles from './ContainerLayout.module.css'

const ContainerLayout = () => {
  return (
    <div className={styles.layout}>
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default ContainerLayout
