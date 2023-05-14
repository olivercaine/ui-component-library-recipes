import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { AppHeader } from './AppHeader'

export default {
  component: AppHeader,
  title: 'Templates/AppHeader',
} as ComponentMeta<typeof AppHeader>

const template = storyTemplate(AppHeader)

const defaultArgs = {
  appName: 'RecipeUI'
}

export const Default = template({ ...defaultArgs })

export const SignIn = template({
  ...defaultArgs,
  children: [
    <button className='inline-flex items-center bg-indigo border-0 py-1 px-3 focus:outline-none
    hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
      Sign in
      <svg fill='none' stroke='currentColor' stroke-linecap='round' strokeLinejoin='round' stroke-width='2'
        className='w-4 h-4 ml-1' viewBox='0 0 24 24'>
        <path d='M5 12h14M12 5l7 7-7 7'></path>
      </svg>
    </button>
  ]
})
