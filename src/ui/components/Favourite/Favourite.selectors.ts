export const selectors = (componentName = 'Favourite') => ({
  wrapper: (value: string | number) => `${componentName}--${value}`,
  button: (value: string | number) => `${componentName}_button--${value}`
})
