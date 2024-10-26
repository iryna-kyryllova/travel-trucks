import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Navigation.module.css'

const defineNavLinkClassName = ({ isActive }) => clsx(styles.link, isActive && styles.active)

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to='/' className={defineNavLinkClassName}>
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/campers' className={defineNavLinkClassName}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
