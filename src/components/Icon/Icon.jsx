import icons from 'img/icons.svg'

/**
 * Component renders an SVG icon from a sprite icons.svg.
 *
 * Props:
 * - `name`: The name of the icon to be used from the sprite.
 *
 * Example:
 * <Icon name="heart" className="custom-class" />
 */

const Icon = ({ name, ...otherProps }) => (
  <svg width='20' height='20' {...otherProps}>
    <use href={`${icons}#icon-${name}`} />
  </svg>
)

export default Icon
