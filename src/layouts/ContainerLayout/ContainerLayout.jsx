import { Outlet } from 'react-router-dom'
import Container from 'components/Container/Container'
import styles from './ContainerLayout.module.css'

/**
 * Layout component that adds vertical spacing (padding) at the top and bottom of the page
 * and centers the content using the Container component.
 */

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
