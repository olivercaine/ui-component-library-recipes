import { recipes } from '@olivercaine/recipe-data'
import { Button } from './ui/basics/Button/Button'
import { Checkbox } from './ui/basics/Checkbox/Checkbox'
import { Image } from './ui/basics/Image/Image'
import { CookingInstruction } from './ui/components/CookingInstruction/CookingInstruction'
import { CookingInstructions } from './ui/components/CookingInstructions/CookingInstructions'
import { Favourite } from './ui/components/Favourite/Favourite'
import { testIds as favouriteSelectors } from './ui/components/Favourite/Favourite.selectors'
import { Ingredients } from './ui/components/Ingredients/Ingredients'
import { Pagination } from './ui/components/Pagination/Pagination'
import { Rating } from './ui/components/Rating/Rating'
import { RecipePreview } from './ui/components/RecipePreview/RecipePreview'
import { testIds as recipePreviewSelectors } from './ui/components/RecipePreview/RecipePreview.selectors'
import { Stepper } from './ui/components/Stepper/Stepper'
import { testIds as stepperSelectors } from './ui/components/Stepper/Stepper.selectors'
import { RecipeDetail } from './ui/features/RecipeDetail/RecipeDetail'
import { Recipes } from './ui/features/Recipes/Recipes'
import { ShoppingList } from './ui/features/ShoppingList/ShoppingList'
import { testIds as shoppingListSelectors } from './ui/features/ShoppingList/ShoppingList.selectors'
import { AppHeader } from './ui/templates/AppHeader/AppHeader'
import { FooterNav } from './ui/templates/FooterNav/FooterNav'

export {
  AppHeader,
  Button,
  Checkbox,
  CookingInstructions,
  CookingInstruction,
  Favourite,
  FooterNav,
  Image,
  Ingredients,
  Pagination,
  RecipeDetail,
  RecipePreview,
  Recipes,
  recipes as mockRecipeData,
  ShoppingList,
  Stepper,
  Rating,

  // Selectors
  favouriteSelectors,
  stepperSelectors,
  recipePreviewSelectors,
  shoppingListSelectors,
}
