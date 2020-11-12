import configureStore from "redux-mock-store"
import {Provider} from "react-redux"
import React from "react"
import {AppState} from "../../model/View"
import {render} from "@testing-library/react"

export const mockStateStore = (state: AppState) => configureStore()(state)

export const renderComponentWithState = (Component: any, state: AppState) => {
    const mockStore = mockStateStore(state)
    render(<Provider store={mockStore}><Component/></Provider>)
    return mockStore
}
