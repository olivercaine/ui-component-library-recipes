import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite } from '../../../index'

export default {
  component: Favourite,
  title: 'Components/Favourite',
} as ComponentMeta<typeof Favourite>

const template = storyTemplate(Favourite)

const defaultArgs = {
  onClick: action('On click')
}

export const Default = template({ ...defaultArgs })

export const IsFavourite = template({ ...defaultArgs, isFavourite: true })
