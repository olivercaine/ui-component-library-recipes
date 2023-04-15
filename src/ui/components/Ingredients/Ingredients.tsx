import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import { IngredientsEntity } from '../../../model/types'

export interface IProps {
  ingredients: IngredientsEntity[]
}

/**
 * Based on MUI: {@link https://mui.com/material-ui/react-list/}
 */
export const Ingredients = ({
  ingredients
}: IProps) =>
  <div className='Ingredients'>
    <h2>Ingredients</h2>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {ingredients.map((ingredient) =>
        <>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt={ingredient.title}
                src={ingredient.media.images?.length ? ingredient?.media?.images[0]?.image : undefined}
              />
            </ListItemAvatar>
            <ListItemText
              primary={ingredient.label}
            />
          </ListItem>

          <Divider variant='inset' component='li' />
        </>
      )}
    </List>
  </div>
