import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { exampleRecipe } from '../../../model/examples'
import { Card, IProps } from './Card'

export default {
  component: Card,
  title: 'Components/Card',
} as ComponentMeta<typeof Card>

const template = storyTemplate(Card)

const defaultArgs: IProps = {
  recipe: exampleRecipe
}

export const Default = template({ ...defaultArgs })