import React from 'react'
import { GreetingContainer } from './GreetingContainer'
import { GreetingTestIds } from '../presentation/Greeting'
import { renderComponentWithState } from '../../util/test/container'
import { appStateDefaults } from '../../util/test/model-defaults'
import { fireEvent, screen } from '@testing-library/react'
import { action, RESET_NAME } from '../../model/Action'

describe('GreetingContainer', () => {
  describe('when the name is clicked', () => {
    it('dispatches an reset name action', () => {
      const { mockStore } = renderComponentWithState(<GreetingContainer/>, appStateDefaults)

      fireEvent.click(screen.getByTestId(GreetingTestIds.Message))

      expect(mockStore.getActions()).toEqual([action(RESET_NAME, {})])
    })
  })
})
