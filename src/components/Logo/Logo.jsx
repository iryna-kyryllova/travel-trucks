import { Link } from 'react-router-dom'
import logo from 'img/logo.svg'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link to='/' className={styles.logo}>
      <img src={logo} className={styles.img} alt='Logo' />
    </Link>
  )
}

export default Logo
