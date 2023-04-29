import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { RecipeHero } from './RecipeHero'

export default {
  component: RecipeHero,
  title: 'Components/RecipeHero',
} as ComponentMeta<typeof RecipeHero>

const template = storyTemplate(RecipeHero)

const defaultArgs = {
  recipe: recipes[0]
}

export const Default = template({ ...defaultArgs })
