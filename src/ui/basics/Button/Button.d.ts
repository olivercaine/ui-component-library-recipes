import { FC, MouseEventHandler } from 'react';
export interface IProps {
    /**
    The callback to call when the button is clicked
    */
    onClick: MouseEventHandler<HTMLButtonElement>;
    /**
    Button text
    */
    text?: string;
}
export declare const Button: FC<IProps>;
