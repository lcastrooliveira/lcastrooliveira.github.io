import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Search from './search'

const Header = ({ locale, intl }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <Search
        searchIndex={data.siteSearchIndex.index}
        locale={locale}
        intl={intl}
      />
    )}
  />
)

export default Header
