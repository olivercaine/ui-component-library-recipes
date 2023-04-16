/// <reference types="react" />
import { CookingInstructionsEntity } from '../../../model/types';
export interface IProps {
    cookingInstructions: CookingInstructionsEntity[];
}
/**
 * Based on MUI: {@link https://mui.com/material-ui/react-list/}
 */
export declare const CookingInstructions: ({ cookingInstructions: ingredients }: IProps) => JSX.Element;
