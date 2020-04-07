import configureStore from "redux-mock-store"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import React from "react"
import {AppState} from "../../model/View"

export const mockStateStore = (state: AppState) => configureStore()(state)

export const renderComponentWithState = (Component: any, state: AppState) => {
    const mockStore = mockStateStore(state)
    const rootElement = document.createElement("DIV")!
    document.body.innerHTML = ""
    document.body.appendChild(rootElement)
    ReactDOM.render(<Provider store={mockStore}><Component/></Provider>,  rootElement)

    return { mockStore, rootElement }
}
export const renderComponent = (Component: any) => {
    const rootElement = document.createElement("DIV")!
    document.body.innerHTML = ""
    document.body.appendChild(rootElement)
    ReactDOM.render(<React.Fragment>{Component}</React.Fragment>,  rootElement)

    return rootElement
}

export const testHandleSelector = (handle: string): string => `[data-test-handle='${handle}']`
export const queryByTestHandle = (handle: string, element: Element) => element.querySelector(testHandleSelector(handle))!
export const queryAllByTestHandle = (handle: string, element: Element) => element.querySelectorAll(testHandleSelector(handle))
