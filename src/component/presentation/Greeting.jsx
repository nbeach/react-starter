import React from 'react'
import * as PropTypes from 'prop-types'

export const Greeting = ({ nameReset, name }) => <div data-testid={GreetingTestIds.Container}>
  <div onClick={() => nameReset()} data-testid={GreetingTestIds.Message}>Hello {name}</div>
</div>

Greeting.propTypes = {
  name: PropTypes.string,
  nameReset: PropTypes.func
}

export const GreetingTestIds = {
  Container: 'GREETING_CONTAINER',
  Message: 'GREETING_MESSAGE'
}
