import FavoriteIcon from '@mui/icons-material/Favorite'
import { CardActions, Link, Rating } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import React from 'react'
import { Recipe } from '../../../model/types'
import { Stepper } from '../Stepper/Stepper'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const RecipePreview = ({
  recipe,
}: {
  recipe: Recipe
}) =>
  <Link className='RecipePreview' href={recipe.url}>
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
        subheader={`${recipe.prep_times.for_2} minutes`}
      />
      <CardMedia
        component='img'
        height='194'
        image={recipe.media.images?.length ? recipe.media.images[0].image : undefined}
        alt={recipe.title}
        sx={{ maxWidth: 345 }}
      />
      <CardContent>
        <Rating name='read-only' value={recipe.rating.average} readOnly />
        <Typography variant='body2' color='text.secondary'>
          {recipe.rating.count} reviews
        </Typography>
      </CardContent>
      <CardActions>

        <Stepper handleDecrement={console.log} handleIncrement={console.log} number={10} />
      </CardActions>
    </Card>
  </Link>
