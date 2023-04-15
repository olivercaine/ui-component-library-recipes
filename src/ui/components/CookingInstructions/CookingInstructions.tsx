import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import { CookingInstructionsEntity } from '../../../model/types'

export interface IProps {
  cookingInstructions: CookingInstructionsEntity[]
}

/**
 * Based on MUI: {@link https://mui.com/material-ui/react-list/}
 */
export const CookingInstructions = ({
  cookingInstructions: ingredients
}: IProps) =>
  <div className='CookingInstructions'>
    <h2>Cooking Instructions</h2>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {ingredients.map((cookingInstruction) =>
        <>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt={cookingInstruction.instruction}
                src={cookingInstruction?.media?.images?.length ? cookingInstruction?.media?.images[0]?.image : undefined}
              />
            </ListItemAvatar>
            <ListItemText
              primary={cookingInstruction.instruction}
            />
          </ListItem>

          <Divider variant='inset' component='li' />
        </>
      )}
    </List>
  </div>
