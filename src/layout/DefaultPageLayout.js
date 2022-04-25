/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useIntl } from 'react-intl'
import { useLocalization } from 'gatsby-theme-i18n'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SiteBody from './SiteBody'
import Metadata from '../components/metadata'

const Layout = ({ children }) => {
  const { locale } = useLocalization()
  const intl = useIntl()
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Metadata />
      <SiteHeader locale={locale} intl={intl} />
      <SiteBody>{children}</SiteBody>
      <SiteFooter />
    </div>
  )
}

export default Layout
