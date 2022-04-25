import React from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'
import moment from 'moment'
import 'moment/locale/pt'

const ArticleItem = ({ node }) => {
  const { excerpt, frontmatter, fields } = node
  const formattedDate = moment(new Date(frontmatter.date))
  return (
    <div className="article">
      <LocalizedLink to={fields.slug}>
        <h1>{frontmatter.title}</h1>
        <p>{formattedDate.format('LL')}</p>
        <p>{excerpt}</p>
      </LocalizedLink>
    </div>
  )
}

export default ArticleItem
