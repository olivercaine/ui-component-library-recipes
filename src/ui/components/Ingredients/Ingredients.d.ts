/// <reference types="react" />
import { IngredientsEntity } from '../../../model/types';
export interface IProps {
    ingredients: IngredientsEntity[];
}
/**
 * Based on MUI: {@link https://mui.com/material-ui/react-list/}
 */
export declare const Ingredients: ({ ingredients }: IProps) => JSX.Element;
