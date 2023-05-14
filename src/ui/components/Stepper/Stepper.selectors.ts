export const testIds = ({ uniqueId = 'Error: missing id' }) => {
  const wrapper = `Stepper-${uniqueId}`
  return {
    wrapper,
    increment: `${wrapper}_button--increment`,
    input: `${wrapper}_input`,
    decrement: `${wrapper}_button--decrement`,
  }
}
