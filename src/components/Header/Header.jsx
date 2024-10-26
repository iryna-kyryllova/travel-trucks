import Container from 'components/Container/Container'
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.holder}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  )
}

export default Header
