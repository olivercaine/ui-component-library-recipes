import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { PlaceholderRecipe } from './Placeholders'

export default {
  component: PlaceholderRecipe,
  title: 'Basics/Placeholders',
} as ComponentMeta<typeof PlaceholderRecipe>

const template = storyTemplate(PlaceholderRecipe)

const defaultArgs = {
  onClick: action('Clicked'),
}

export const Default = template({ ...defaultArgs })
