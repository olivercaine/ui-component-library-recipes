export const testIds = ({ uniqueId = 'Error: missing id' }) => {
  const wrapper = `Favourite-${uniqueId}`
  return {
    wrapper,
    button: `${wrapper}_button`
  }
}
