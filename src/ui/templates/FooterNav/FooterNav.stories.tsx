import FavoriteIcon from '@mui/icons-material/Favorite'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { FooterNav } from '../../../index'

export default {
  component: FooterNav,
  title: 'Templates/FooterNav',
} as ComponentMeta<typeof FooterNav>

const template = storyTemplate(FooterNav)

const defaultArgs = {}

export const Default = template({
  ...defaultArgs
})

export const WithNav = template({
  ...defaultArgs,
  children: [
    <BottomNavigationAction
      data-testid={'search'}
      label='Search'
      value='recents'
      sx={{ color: '#a3a3a3', font: '#a3a3a3' }}
      icon={<ManageSearchIcon />} />,
    <BottomNavigationAction
      data-testid={'favourites'}
      label='Favorites'
      value='favorites'
      sx={{ color: '#a3a3a3', font: '#a3a3a3' }}
      icon={<FavoriteIcon sx={{ color: '#a3a3a3', font: '#a3a3a3' }} />} />,
    <BottomNavigationAction
      data-testid={'shopping-list'}
      label='Shopping List'
      value='nearby'
      sx={{ color: '#a3a3a3', font: '#a3a3a3' }}
      icon={<ShoppingCartIcon />} />
  ]
})
