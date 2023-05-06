import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Recipes } from '../../../index'

export default {
  component: Recipes,
  title: 'Features/Recipes',
} as ComponentMeta<typeof Recipes>

const template = storyTemplate(Recipes)

const defaultArgs = {
  recipes: [recipes[0], recipes[0], recipes[0], recipes[0], recipes[0], recipes[0]],
  onStepperChange: action,
  onImageClick: action
}

export const Default = template({ ...defaultArgs })
