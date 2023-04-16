import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Component, IProps } from './RecipeSearch'

export default {
  component: Component,
  title: 'Applications/RecipeSearch',
} as ComponentMeta<typeof Component>

const template = storyTemplate(Component)

const defaultArgs: IProps = {}

export const Default = template({ ...defaultArgs })
