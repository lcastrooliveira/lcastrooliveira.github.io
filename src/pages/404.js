import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Flex, Heading, Link } from 'theme-ui'
import Layout from '../layout/DefaultPageLayout'
import GoBackButton from '../components/gobackButton'

const NotFound = () => (
  <Layout>
    <Flex p={1} style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Heading as="h2">Oops! - The page requested could not be found</Heading>
      <GoBackButton style={{ margin: '15px' }} />
      <StaticImage
        width={600}
        height={400}
        src="../images/not_found.png"
        alt="Not Found"
      />
      <Link href="https://www.freepik.com/vectors/computer">
        Computer vector created by storyset - www.freepik.com
      </Link>
    </Flex>
  </Layout>
)

export default NotFound
