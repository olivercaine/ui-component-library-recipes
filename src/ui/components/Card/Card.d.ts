import { FC } from 'react';
import { Recipe } from '../../../model/types';
export interface IProps {
    /**
    The recipe to be displayed
    */
    recipe: Recipe;
}
export declare const Card: FC<IProps>;
