import {AppState} from "../../model/view";
import {render} from "@testing-library/react";
import React from "react";
import {mockStateStore} from "./state";
import {Provider} from "react-redux";

export const renderComponentWithState = (Component: any, state: AppState) => {
    const mockStore = mockStateStore(state)
    render(<Provider store={mockStore}><Component/></Provider>)
    return mockStore
}
