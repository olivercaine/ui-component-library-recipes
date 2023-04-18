import Grid from '@mui/joy/Grid'
import Sheet from '@mui/joy/Sheet'
import { styled } from '@mui/joy/styles'
import React, { FC } from 'react'
import { Recipe } from '../../../model/types'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipes: Recipe[]
}

const Item = styled(Sheet)(({ theme }: { theme: any }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
}))

export const Recipes: FC<IProps> = ({ recipes }: IProps) =>
  <div className='Recipes'>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid sm={6} lg={3}>
        {recipes.map(recipe => <Item><RecipePreview onImageClick={console.log} recipe={recipe} /></Item>)}
      </Grid>
    </Grid>
  </div>
