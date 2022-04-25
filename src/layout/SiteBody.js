/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

const SiteBody = ({ children }) => (
  <main
    sx={{
      width: '100%',
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Container p={4} bg="muted">
      {children}
    </Container>
  </main>
)

export default SiteBody
