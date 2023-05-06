import React, { FC } from 'react'
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'

export interface IProps extends LazyLoadImageProps {}

export const Image: FC<IProps> = (props) => <LazyLoadImage {...props}/>
