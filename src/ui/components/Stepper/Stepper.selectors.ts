export const selectors = (componentName = 'Stepper') => ({
  wrapper: () => `${componentName}`,
  increment: () => `${componentName}_button--increment`,
  input: () => `${componentName}_input`,
  decrement: () => `${componentName}_button--decrement`,
})
