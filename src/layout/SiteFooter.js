/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const SiteFooter = () => (
  <Box p={2} color="white" bg="primary">
    <footer
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        variant: 'styles.footer',
      }}
    >
      <div sx={{ p: 2 }}>© 2022 Lucas de Castro Oliveira</div>
    </footer>
  </Box>
)

export default SiteFooter
