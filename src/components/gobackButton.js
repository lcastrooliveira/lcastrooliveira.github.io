import React from 'react'
import { navigate } from 'gatsby'
import { Button } from 'theme-ui'

const GoBackButton = ({ style }) => (
  <Button
    sx={{
      ':hover': {
        cursor: 'pointer',
      },
    }}
    style={style}
    onClick={() => navigate(-1)}
  >
    Go Back
  </Button>
)

export default GoBackButton
