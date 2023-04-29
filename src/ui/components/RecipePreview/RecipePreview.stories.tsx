import { recipes } from '@olivercaine/recipe-data'
import { linkTo } from '@storybook/addon-links'
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
  onImageClick: linkTo('Components/Stepper', 'Default')
}

export const Default = template({ ...defaultArgs })

export const Demo = template({ ...defaultArgs, onImageClick: console.log })

export const Favourite = template({ ...defaultArgs, isFavourite: true })
