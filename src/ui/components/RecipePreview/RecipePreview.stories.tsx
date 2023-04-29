import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { RecipePreview } from '../../../index'

export default {
  component: RecipePreview,
  title: 'Components/RecipePreview',
} as ComponentMeta<typeof RecipePreview>

const template = storyTemplate(RecipePreview)

const defaultArgs = {
  recipe: recipes[0],
  onImageClick: action,
  onStepperChange: action,
}

export const Default = template({ ...defaultArgs })

export const Favourite = template({ ...defaultArgs, isFavourite: true })
