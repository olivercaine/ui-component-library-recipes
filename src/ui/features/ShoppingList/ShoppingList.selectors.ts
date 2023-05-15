export const testIds = ({ uniqueImageId = 'Error' }) => {
  const wrapper = 'ShoppingList'
  return {
    image: `${wrapper}_img-${uniqueImageId}`,
    wrapper,
  }
}
