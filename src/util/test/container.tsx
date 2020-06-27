import configureStore from "redux-mock-store"
import {Provider} from "react-redux"
import React from "react"
import {AppState} from "../../model/View"
import {render} from '@testing-library/react'

export const mockStateStore = (state: AppState) => configureStore()(state)

export const renderComponentWithState = (fragment: any, state: AppState) => {
    const mockStore = mockStateStore(state)
    const renderResult = render(<Provider store={mockStore}>{fragment}</Provider>)

    return { mockStore, renderResult }
}

export const testIdSelector = (handle: string): string => `[data-testid='${handle}']`
