import FavoriteIcon from '@mui/icons-material/Favorite'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { AppHeader, FooterNav, Pagination, Recipes } from '../../../index'

export const RecipeSearchPage = ({
  appName,
  onImageClick,
  onStepperChange,
  recipes,
}: {
  /**
  The name of the app
  */
  appName?: string
  onImageClick: any,
  onStepperChange: any,
  recipes: IRecipe[]
}) =>
  <>
    <AppHeader appName={appName} />
    <Recipes dispatch={console.log} recipes={recipes} />
    <Pagination />
    <FooterNav>
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
    </FooterNav>
  </>
