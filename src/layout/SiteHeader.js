/** @jsx jsx */
import { jsx, Box, Link } from 'theme-ui'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../components/searchBar/header'
import './headers.css'

const SiteHeader = ({ locale, intl }) => (
  <Box p={2} color="white" bg="primary">
    <header
      sx={{
        display: 'grid',
        gridGap: 3,
        maxWidth: 1024,
        mx: 'auto',
        px: 3,
        py: 3,
        gridAutoFlow: 'row',
        gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
        variant: 'styles.header',
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gridColumnStart: [1, 2],
          gridColumnEnd: [3, 3],
          order: [0, 1],
        }}
      >
        <LocalizedLink to="/" title="Home">
          <StaticImage src="../images/blog-logo.png" alt="Blog Logo" />
          <span
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              top: -9999,
            }}
          >
            Home
          </span>
        </LocalizedLink>
      </div>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <LocalizedLink
          to="/about"
          sx={{
            variant: 'styles.navlink',
            p: 2,
          }}
        >
          {intl.formatMessage({ id: 'about' })}
        </LocalizedLink>
        <LocalizedLink
          to="/contact"
          sx={{
            variant: 'styles.navlink',
            p: 2,
          }}
        >
          {intl.formatMessage({ id: 'contact' })}
        </LocalizedLink>
        <Link
          href="/"
          className={`languageSelector ${
            locale === 'en' ? 'languageSelectorSelected' : ''
          }`}
        >
          EN
        </Link>
        <Link
          href="/pt"
          className={`languageSelector ${
            locale === 'pt' ? 'languageSelectorSelected' : ''
          }`}
        >
          PT
        </Link>
      </div>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          order: 2,
        }}
      >
        <Header locale={locale} intl={intl} />
      </div>
    </header>
  </Box>
)

export default SiteHeader
