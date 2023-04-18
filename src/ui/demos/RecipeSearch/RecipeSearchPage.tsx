import Grid from '@mui/material/Unstable_Grid2'
import * as React from 'react'
import { recipe } from '../../../model/examples'
import { FooterNav } from '../../components/FooterNav/FooterNav'
import { Pagination } from '../../components/Pagination/Pagination'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'
import { AppHeader } from '../../templates/AppHeader'

export const RecipeSearchPage = ({
  appName,
  onImageClick
}: {
  /**
  The name of the app
  */
  appName?: string
  onImageClick: any,
}) =>
  <>
    <AppHeader appName={appName}/>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {Array(10).fill(0).map((_, i) =>
        <Grid xs={12} sm={6} md={3}>
          <RecipePreview recipe={recipe} onImageClick={onImageClick}/>
        </Grid>
      )}
    </Grid>
    <Pagination/>
    <FooterNav/>
  </>
