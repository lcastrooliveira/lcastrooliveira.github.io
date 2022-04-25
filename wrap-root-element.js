import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import SimpleReactLightbox from 'simple-react-lightbox'

// components is its own object outside of render so that the references to
// components are stable

export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>
    <MDXProvider>{element}</MDXProvider>
  </SimpleReactLightbox>
)
