import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { RecipePreview } from '../../../index'
import { exampleRecipe } from '../../../model/examples'

export default {
  component: RecipePreview,
  title: 'Components/RecipePreview',
} as ComponentMeta<typeof RecipePreview>

const template = storyTemplate(RecipePreview)

const defaultArgs = {
  recipe: exampleRecipe
}

export const Default = template({ ...defaultArgs })
