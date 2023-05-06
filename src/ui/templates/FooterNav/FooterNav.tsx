import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import React from 'react'

export const FooterNav = ({
  children
}: {
  children?: React.ReactNode[]
}) =>
  <div data-testid='FooterNav'>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation sx={{ width: '100%', backgroundColor: '#14181b' }}
        showLabels
        value={1}
        onChange={console.log}
      >
        {children}
      </BottomNavigation>
    </Paper>
  </div>
