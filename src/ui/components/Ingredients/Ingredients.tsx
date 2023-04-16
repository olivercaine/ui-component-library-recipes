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
    <h2 className='text-gray-900 text-3xl title-font font-medium mb-1'>
      Ingredients
    </h2>
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {ingredients.map((ingredient) =>
          <div className='flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto'>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center'>
                <img className="h-auto max-w-full rounded-full"  src={ingredient.media.images?.length ? ingredient?.media?.images[0]?.image : undefined}/>
              </div>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>{ingredient.label}</h2>
                {/* <p className='leading-relaxed'>VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
    </List> */}
  </div>
