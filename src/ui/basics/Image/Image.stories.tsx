import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Image } from '../../../index'
import { IProps } from './Image'

export default {
  component: Image,
  title: 'Basics/Image',
} as ComponentMeta<typeof Image>

const template = storyTemplate(Image)

const defaultArgs: IProps = {
  onClick: action('Clicked'),
  // eslint-disable-next-line max-len
  src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80',
}

export const Default = template({ ...defaultArgs })

export const MissingImage = template({
  ...defaultArgs,
  src: 'https://non-existent-url',
})
