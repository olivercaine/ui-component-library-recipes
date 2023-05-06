import FavoriteIcon from '@mui/icons-material/Favorite'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { RecipeDetail } from '../../features/RecipeDetail/RecipeDetail'
import { AppHeader } from '../../templates/AppHeader/AppHeader'
import { FooterNav } from '../../templates/FooterNav/FooterNav'

export const RecipeDetailPage: React.FC<{
  /**
  The name of the app
  */
  appName?: string
    /**
  The recipe to use
  */
  recipe: IRecipe
}> = ({
  appName,
  recipe
}) =>
  <>
    <AppHeader appName={appName}/>
    <RecipeDetail recipe={recipe} />
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
