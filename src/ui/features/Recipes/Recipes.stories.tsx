import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Recipes } from '../../../index'

export default {
  component: Recipes,
  title: 'Features/Recipes',
} as ComponentMeta<typeof Recipes>

const template = storyTemplate(Recipes)

const defaultArgs = {
  recipes
}

export const Default = template({ ...defaultArgs })
