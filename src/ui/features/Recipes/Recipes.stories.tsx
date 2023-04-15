import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { exampleRecipe } from '../../../model/examples'
import { IProps, Recipes } from './Recipes'

export default {
  component: Recipes,
  title: 'Features/Recipes',
} as ComponentMeta<typeof Recipes>

const template = storyTemplate(Recipes)

const defaultArgs: IProps = {
  recipes: [exampleRecipe, exampleRecipe, exampleRecipe]
}

export const Default = template({ ...defaultArgs })
