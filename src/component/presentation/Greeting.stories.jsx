import { storiesOf } from '@storybook/react'
import React from 'react'
import { Greeting } from './Greeting'

const state = {
  name: 'John',
  nameReset: () => {}
}

storiesOf('Greeting', module)
  .add('default', () => <Greeting {...state}/>)
