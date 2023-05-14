export const testIds = ({ uniqueId = 'Error: missing id' }) => {
  const wrapper = `RecipePreview-${uniqueId}`
  return {
    wrapper,
    image: `${wrapper}_img--main`
  }
}
