import React, { useState, useRef } from 'react'
import { Input } from 'theme-ui'
import { Index } from 'elasticlunr'
import { Link } from 'gatsby'
import './style.css'
import useComponentVisible from '../../hooks/use-component-visible'

const DropDown = ({ results, targetException }) => {
  const { ref, isComponentVisible } = useComponentVisible(true, targetException)
  return (
    <div ref={ref}>
      {isComponentVisible && (
        <ul className="listStyle">
          {results.map(page => (
            <li className="listItemStyle" key={page.id}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const Search = ({ searchIndex, locale, intl }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const index = useRef()
  const inputRef = useRef()

  const getOrCreateIndex = () =>
    index.current ? index.current : (index.current = Index.load(searchIndex))

  const search = evt => {
    const newQuery = evt.target.value
    const initializedIndex = getOrCreateIndex()
    setQuery(newQuery)
    setResults(
      initializedIndex
        .search(query, {
          expand: true,
          fields: {
            title: { boost: 1, bool: 'OR' },
            language: { boost: 2, bool: 'AND' },
          },
        })
        .map(({ ref }) => initializedIndex.documentStore.getDoc(ref))
        .filter(doc => doc.language === locale)
    )
  }

  return (
    <div>
      <Input
        placeholder={intl.formatMessage({ id: 'searchArticle' })}
        value={query}
        onChange={search}
        onFocus={search}
        style={{ backgroundColor: '#fff', color: '#000' }}
        ref={inputRef}
      />
      {results.length > 0 ? (
        <DropDown results={results} targetException={inputRef} />
      ) : null}
    </div>
  )
}

export default Search
