import FavoriteIcon from '@mui/icons-material/Favorite'
import { CardActions, Link, Rating } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Recipe } from '../../../model/types'
import { Stepper } from '../Stepper/Stepper'

export const RecipePreview = ({
  recipe,
  onImageClick
}: {
  recipe: Partial<Recipe>,
  onImageClick: any,
}) =>
  <Card>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: blue[500] }} aria-label='recipe'>
            R
        </Avatar>
      }
      action={
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
      }
      title={recipe.title}
      // @ts-expect-error
      subheader={`${recipe.prep_times.for_2} minutes`}
    />
    <Link onClick={() => onImageClick(recipe)}>
      <CardMedia
        component='img'
        height='194'
        // @ts-expect-error
        image={recipe.media.images?.length ? recipe.media.images[0].image : undefined}
        alt={recipe.title}
        sx={{ maxWidth: 345 }}
      />
    </Link>
    <CardContent>
      <Rating name='read-only' value={recipe?.rating?.average} readOnly />
      <Typography variant='body2' color='text.secondary'>
        {recipe?.rating?.count} reviews
      </Typography>
    </CardContent>
    <CardActions>
      <Stepper handleDecrement={console.log} handleIncrement={console.log} number={10} />
    </CardActions>
  </Card>
