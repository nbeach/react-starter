import {viewReducer} from "./viewReducer"
import {DEFAULT_STATE} from "../default-state"


export const rootReducer = (previousState = DEFAULT_STATE, action) => ({
    ...previousState,
    view: viewReducer(previousState.view, action),
})

