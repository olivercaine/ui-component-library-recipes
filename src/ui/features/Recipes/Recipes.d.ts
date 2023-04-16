import { FC } from 'react';
import { Recipe } from '../../../model/types';
export interface IProps {
    /**
    Text to be shown in the button
    */
    recipes: Recipe[];
}
export declare const Recipes: FC<IProps>;
