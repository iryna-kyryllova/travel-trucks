import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Button.module.css'

/**
 * Component supporting <button> and <Link> elements.
 *
 * Props:
 * - `as`: 'button' (default) or 'link' (renders <Link>).
 * - `className`: Additional CSS classes.
 * - `outlined`: Boolean flag, applies outline styles.
 *
 * Examples:
 * <Button type="submit">Submit</Button>
 * <Button as="link" to="/path">Link</Button>
 * <Button outlined>Outlined Button</Button>
 */

const Button = ({ as = 'button', className, outlined, children, ...otherProps }) => {
  const buttonClsx = clsx(styles.button, outlined && styles.outlined, className)

  if (as === 'link') {
    return (
      <Link className={buttonClsx} {...otherProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClsx} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
