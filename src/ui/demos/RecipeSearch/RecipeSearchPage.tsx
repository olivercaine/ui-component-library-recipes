import { recipes } from '@olivercaine/recipe-data'
import * as React from 'react'
import { Pagination } from '../../components/Pagination/Pagination'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'
import { AppHeader } from '../../templates/AppHeader/AppHeader'
import { FooterNav } from '../../templates/FooterNav/FooterNav'

export const RecipeSearchPage = ({
  appName,
  onImageClick,
  onStepperChange
}: {
  /**
  The name of the app
  */
  appName?: string
  onImageClick: any,
  onStepperChange: any
}) =>
  <>
    <AppHeader appName={appName}/>
    <div className='flex flex-wrap -m-4'>
      {Array(10).fill(0).map((_, i) =>
        <RecipePreview onStepperChange={onStepperChange} recipe={recipes[0]} onImageClick={onImageClick}/>
      )}
    </div>
    <Pagination/>
    <FooterNav/>
  </>
