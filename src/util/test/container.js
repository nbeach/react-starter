import configureStore from "redux-mock-store"
import {Provider} from "react-redux"
import React from "react"
import {render} from '@testing-library/react'

export const mockStateStore = (state) => configureStore()(state)

export const renderComponentWithState = (fragment, state) => {
    const mockStore = mockStateStore(state)
    const renderResult = render(<Provider store={mockStore}>{fragment}</Provider>)

    return { mockStore, renderResult }
}

export const testIdSelector = (handle) => `[data-testid='${handle}']`
