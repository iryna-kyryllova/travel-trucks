import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Button.module.css'

/**
 * Button component supporting <button> and <Link> elements.
 *
 * Props:
 * - `as`: 'button' (default) or 'link' (renders <Link>).
 * - `className`: Additional CSS classes.
 *
 * Examples:
 * <Button type="submit">Submit</Button>
 * <Button as="link" to="/path">Link</Button>
 */

const Button = (props) => {
  const { as = 'button', className, children, ...otherProps } = props

  if (as === 'link') {
    return (
      <Link className={clsx(styles.button, className)} {...otherProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={clsx(styles.button, className)} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
