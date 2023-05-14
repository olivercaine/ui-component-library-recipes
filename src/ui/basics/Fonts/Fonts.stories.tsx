import { ComponentMeta } from '@storybook/react'
import React, { FC } from 'react'
import { storyTemplate } from '../../../../.storybook/helpers'

const Fonts: FC = () =>
  <div className='text-white'>
    <h2>H1 Text</h2>
    <h1>Some example H1 text</h1>

    <h2>H2 Text</h2>
    <h2>Some example H2 text</h2>

    <h2>H3 Text</h2>
    <h3>Some example H3 text</h3>

    <h2>H4 Text</h2>
    <h4>Some example H4 text</h4>

    <h2>H5 Text</h2>
    <h5>Some example H5 text</h5>

    <h2>H6 Text</h2>
    <h6>Some example H6 text</h6>

    <h2>Paragraphs</h2>
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Varius vel pharetra vel turpis. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Tortor condimentum
        lacinia quis vel eros. Lectus sit amet est placerat in egestas erat. Quis blandit turpis cursus in hac habitasse. Porttitor
        rhoncus dolor purus non enim praesent. Amet nisl purus in mollis nunc sed id semper. Maecenas sed enim ut sem viverra. Orci
        nulla pellentesque dignissim enim. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Molestie ac feugiat
        sed lectus vestibulum. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Et malesuada fames ac turpis egestas
        maecenas. Vitae et leo duis ut diam quam nulla porttitor. Augue interdum velit euismod in. Diam phasellus vestibulum lorem sed
        risus ultricies tristique nulla aliquet. Eros donec ac odio tempor orci.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Varius vel pharetra vel turpis. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Tortor condimentum
        lacinia quis vel eros. Lectus sit amet est placerat in egestas erat. Quis blandit turpis cursus in hac habitasse. Porttitor
        rhoncus dolor purus non enim praesent. Amet nisl purus in mollis nunc sed id semper. Maecenas sed enim ut sem viverra. Orci
        nulla pellentesque dignissim enim. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Molestie ac feugiat
        sed lectus vestibulum. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Et malesuada fames ac turpis egestas
        maecenas. Vitae et leo duis ut diam quam nulla porttitor. Augue interdum velit euismod in. Diam phasellus vestibulum lorem sed
        risus ultricies tristique nulla aliquet. Eros donec ac odio tempor orci.</p>
    </>

    <h2>Small</h2>
    <small>This is some smaller text</small>

    <h2>Bold</h2>
    <b>This is some bold text</b>

    <h2>Link</h2>
    <a href='/'>This is a regular link</a>
  </div>

export default {
  component: Fonts,
  title: 'Basics/Fonts',
} as ComponentMeta<typeof Fonts>

const template = storyTemplate(Fonts)

export const Default = template({})
