import React from 'react'
import { graphql } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'
import { Divider } from 'theme-ui'
import moment from 'moment'
import Layout from '../layout/DefaultPageLayout'
import ArticleItem from '../layout/ArticleItem'
import 'moment/locale/pt'
import './article.css'

export const query = graphql`
  query ($locale: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(locale: $locale)
        }
        fields {
          slug
          locale
        }
      }
    }
  }
`
const HomePage = ({ data }) => {
  const { locale } = useLocalization()
  moment.locale(locale)
  return (
    <Layout>
      <div>
        {data.allMdx.nodes.map(node => (
          <span key={node.frontmatter.title}>
            <ArticleItem node={node} />
            <Divider />
          </span>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
