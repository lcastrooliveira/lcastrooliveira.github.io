import React from 'react'
import Helmet from 'react-helmet'

import socialBanner from '../images/social-banner.png'

const Metadata = () => (
  <div>
    <Helmet>
      <title>lcastrooliveira.dev</title>

      <meta property="og:image:secure_url" content={socialBanner} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="lcastrooliveira.dev Blog" />
      <meta property="og:description" content="Welcome to my blog" />
      <meta property="og:url" content="https://lcastrooliveira.dev" />
      <meta property="og:updated_time" content="2019-01-31" />
    </Helmet>
  </div>
)

export default Metadata
