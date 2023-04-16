import Grid from '@mui/joy/Grid'
import Sheet from '@mui/joy/Sheet'
import { styled } from '@mui/joy/styles'
import React, { FC } from 'react'
import { CookingInstructionsEntity, IngredientsEntity, Recipe } from '../../../model/types'
import { CookingInstructions } from '../../components/CookingInstructions/CookingInstructions'
import { Ingredients } from '../../components/Ingredients/Ingredients'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipe: Recipe
}

const Item = styled(Sheet)(({ theme }: { theme: any }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
}))

export const RecipeDetail: FC<IProps> = ({ recipe }: IProps) =>
  <div className='RecipeDetail'>
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid sm={12}>
        <RecipePreview recipe={recipe}/>
      </Grid>
      <Grid md={4}>
        <Item>
          <Ingredients ingredients={recipe.ingredients as IngredientsEntity[]} />
        </Item>
      </Grid>
      <Grid md={8}>
        <Item>
          <CookingInstructions cookingInstructions={recipe.cooking_instructions as CookingInstructionsEntity[]} />
        </Item>
      </Grid>
    </Grid>
  </div>
