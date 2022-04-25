/** @jsx jsx */
import { jsx, Flex, Heading, Paragraph, Image } from 'theme-ui'
import { SocialIcon } from 'react-social-icons'
import { useIntl } from 'react-intl'
import Helmet from 'react-helmet'
import { useLocalization } from 'gatsby-theme-i18n'
import Layout from '../layout/DefaultPageLayout'
import avatar from '../images/avatar.jpg'

const About = ({ location }) => {
  const intl = useIntl()
  const { locale } = useLocalization()
  return (
    <Layout>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'aboutTitle',
          })}
        </title>

        <meta
          property="og:title"
          content={`${intl.formatMessage({
            id: 'aboutTitle',
          })} | lcastrooliveira.dev`}
        />

        <meta property="og:url" content={location.url} />
        <meta property="og:locale" content={locale} />
        <meta
          property="og:description"
          content={intl.formatMessage({ id: 'aboutText' })}
        />
      </Helmet>
      <Flex
        id="my-flex-box"
        color="white"
        bg="primary"
        sx={{ flex: '1 1 auto', flexDirection: 'column' }}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Flex p={3} style={{ justifyContent: 'center' }}>
          <Image src={avatar} variant="avatar" style={{ margin: '5px' }} />
        </Flex>
        <Flex p={3} sx={{ flexDirection: 'column' }}>
          <Heading style={{ alignSelf: 'center' }}>
            {intl.formatMessage({ id: 'aboutTitle' })}
          </Heading>
          <br />
          <Paragraph>{intl.formatMessage({ id: 'aboutText' })}</Paragraph>
        </Flex>
        <Flex p={4} style={{ justifyContent: 'center' }}>
          <SocialIcon
            url="https://www.linkedin.com/in/lcastrooliveira/"
            bgColor="white"
            fgColor="black"
            target="_blank"
            style={{ margin: '5px 10px', textAlign: 'center' }}
          />
          <SocialIcon
            url="https://github.com/lcastrooliveira"
            bgColor="white"
            fgColor="black"
            target="_blank"
            style={{ margin: '5px 10px', textAlign: 'center' }}
          />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default About
