export const formatPrice = (price) => {
  return price.toFixed(2)
}

export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
