import { FC } from 'react';
import { Recipe } from '../../../model/types';
export interface IProps {
    /**
    Text to be shown in the button
    */
    recipe: Recipe;
}
export declare const RecipeDetail: FC<IProps>;
