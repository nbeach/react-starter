import {Action} from "redux"
import {viewReducer} from "./viewReducer"
import {DEFAULT_STATE} from "../defaultState"
import {AppState} from "../../model/view"


export const rootReducer = (previousState: AppState = DEFAULT_STATE, action: Action): AppState => ({
    ...previousState,
    view: viewReducer(previousState.view, action),
})

