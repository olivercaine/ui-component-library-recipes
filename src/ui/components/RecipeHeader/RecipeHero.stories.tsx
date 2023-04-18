import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { recipe } from '../../../model/examples'
import { RecipeHero } from './RecipeHero'

export default {
  component: RecipeHero,
  title: 'Components/RecipeHero',
} as ComponentMeta<typeof RecipeHero>

const template = storyTemplate(RecipeHero)

const defaultArgs = {
  recipe
}

export const Default = template({ ...defaultArgs })
