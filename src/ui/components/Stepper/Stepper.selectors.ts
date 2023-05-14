export const selectors = (componentName = 'Stepper') => ({
  wrapper: () => `${componentName}`,
  increment: () => `${componentName}_button--increment`,
  decrement: () => `${componentName}_button--decrement`,
})
