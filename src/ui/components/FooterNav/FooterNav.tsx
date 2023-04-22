import FavoriteIcon from '@mui/icons-material/Favorite'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import * as React from 'react'

export const FooterNav = () =>
  <div data-testid='FooterNav'>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ width: '100%', backgroundColor: '#14181b' }}
        showLabels
        value={1}
        onChange={console.log}
      >
        <BottomNavigationAction
          label='Search'
          value='recents'
          icon={<ManageSearchIcon />} />
        <BottomNavigationAction
          label='Favorites'
          value='favorites'
          color={ '#6466f1'}
          icon={<FavoriteIcon color={'primary'} />} />
        <BottomNavigationAction
          label='Shopping List'
          value='nearby'
          icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Paper>
  </div>
