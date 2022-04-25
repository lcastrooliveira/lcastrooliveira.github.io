/** @jsx jsx */
import {
  jsx,
  Flex,
  Button,
  Label,
  Input,
  Textarea,
  Heading,
  Link,
} from 'theme-ui'
import { useIntl } from 'react-intl'
import { useForm, ValidationError } from '@formspree/react'
import Helmet from 'react-helmet'
import { useLocalization } from 'gatsby-theme-i18n'
import Layout from '../layout/DefaultPageLayout'

const Contact = ({ location }) => {
  const intl = useIntl()
  const { locale } = useLocalization()
  const [state, handleSubmit] = useForm('mrgjpoow')
  if (state.succeeded) {
    return (
      <Layout>
        <Flex
          id="contact-outer"
          color="white"
          bg="primary"
          sx={{ flex: '1 1 auto', flexDirection: 'column', padding: '20px' }}
        >
          <Heading>{intl.formatMessage({ id: 'thanksContactForm' })}</Heading>
          <Link href="/" style={{ textDecoration: 'underline' }}>
            {intl.formatMessage({ id: 'goBackToBlogContactForm' })}
          </Link>
        </Flex>
      </Layout>
    )
  }
  return (
    <Layout>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'getInTouchTitleContactForm',
          })}
        </title>

        <meta
          property="og:title"
          content={`${intl.formatMessage({
            id: 'getInTouchTitleContactForm',
          })} | lcastrooliveira.dev`}
        />

        <meta property="og:url" content={location.url} />
        <meta property="og:locale" content={locale} />
      </Helmet>
      <Flex
        id="contact-outer"
        as="form"
        onSubmit={handleSubmit}
        color="white"
        bg="primary"
        sx={{ flex: '1 1 auto', flexDirection: 'column' }}
      >
        <Flex
          id="contact-inner"
          p={2}
          sx={{ flexDirection: 'column', padding: '15px' }}
        >
          <Heading style={{ alignSelf: 'center' }}>
            {intl.formatMessage({ id: 'getInTouchTitleContactForm' })}
          </Heading>
          <Label htmlFor="email">
            {intl.formatMessage({ id: 'emailAddressContactForm' })}
          </Label>
          <Input name="email" id="email" type="email" mb={4} required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Label htmlFor="message">
            {intl.formatMessage({ id: 'messageContactForm' })}
          </Label>
          <Textarea name="message" id="message" rows={8} mb={4} required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            variant="secondary"
            sx={{
              ':hover': {
                cursor: 'pointer',
              },
              alignSelf: 'flex-start',
            }}
            type="submit"
            disabled={state.submitting}
          >
            {intl.formatMessage({ id: 'submitContactForm' })}
          </Button>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Contact
