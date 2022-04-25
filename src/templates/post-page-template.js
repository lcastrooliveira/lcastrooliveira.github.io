import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Disqus } from 'gatsby-plugin-disqus'
import React, { useEffect } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { useLocalization } from 'gatsby-theme-i18n'
import Helmet from 'react-helmet'
import moment from 'moment'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Layout from '../layout/DefaultPageLayout'
import 'moment/locale/pt'

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        language
        description
        date
      }
      fields {
        slug
      }
    }
  }
`

const PageTemplate = ({ data }) => {
  const { frontmatter, body, fields, id } = data.mdx
  const { siteUrl } = useSiteMetadata()
  const { locale } = useLocalization()
  moment.locale(locale)
  const myURL = `${siteUrl}${fields.slug}`
  useEffect(() => {
    deckDeckGoHighlightElement()
  }, [])
  const formattedDate = moment(new Date(frontmatter.date))
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>

        {/* Example from pageContext prop, gatsby-node.js */}
        <meta
          property="og:title"
          content={`${frontmatter.title} | lcastrooliveira.dev`}
        />

        {/* Get path from location string */}
        <meta property="og:url" content={myURL} />
        <meta property="og:locale" content={locale} />
        <meta property="og:description" content={frontmatter.description} />
      </Helmet>
      <button
        id="scroll-btn"
        type="button"
        className="sidebar-btns"
        title="Scroll to top"
        aria-label="Scroll to top"
      />
      <h1>{frontmatter.title}</h1>
      <p>{formattedDate.format('LL')}</p>
      <SRLWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </SRLWrapper>
      <Disqus
        config={{
          /* Replace PAGE_URL with your post's canonical URL variable */
          url: myURL,
          /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
          identifier: id,
          /* Replace PAGE_TITLE with the title of the page */
          title: frontmatter.title,
        }}
      />
    </Layout>
  )
}

export default PageTemplate
