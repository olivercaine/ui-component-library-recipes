import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { exampleRecipe } from '../../../model/examples'
import { IProps, RecipePreview } from './RecipePreview'

export default {
  component: RecipePreview,
  title: 'Components/RecipePreview',
} as ComponentMeta<typeof RecipePreview>

const template = storyTemplate(RecipePreview)

const defaultArgs: IProps = {
  recipe: exampleRecipe
}

export const Default = template({ ...defaultArgs })
