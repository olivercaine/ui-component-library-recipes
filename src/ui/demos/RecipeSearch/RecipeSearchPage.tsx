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
    <div className='flex flex-wrap -m-4'>
      {Array(10).fill(0).map((_, i) =>
        <RecipePreview recipe={recipe} onImageClick={onImageClick}/>
      )}
    </div>
    <Pagination/>
    <FooterNav/>
  </>
