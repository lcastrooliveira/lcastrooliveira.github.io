import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import SimpleReactLightbox from 'simple-react-lightbox'
import MDXLink from './src/components/MDXLink'

// components is its own object outside of render so that the references to
// components are stable

export const wrapPageElement = ({ element }) => (
  <SimpleReactLightbox>
    <MDXProvider components={{ a: MDXLink }}>{element}</MDXProvider>
  </SimpleReactLightbox>
)
