import Container from 'components/Container/Container'
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.holder}>
        <Logo />
        <Navigation />
      </Container>
    </header>
  )
}

export default Header
