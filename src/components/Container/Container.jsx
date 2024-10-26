import clsx from 'clsx'
import styles from './Container.module.css'

/**
 * Standard layout container that centers its children horizontally and applies consistent horizontal
 * padding, ensuring that content stays within a maximum width.
 *
 * Props:
 * - `className`: Additional CSS classes.
 *
 * Example:
 * <Container>
 *   <p>Your centered content here</p>
 * </Container>
 */

const Container = (props) => {
  const { className, children, ...otherProps } = props

  return (
    <div className={clsx(styles.container, className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Container
