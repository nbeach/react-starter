import {Action} from "redux"
import {viewReducer} from "./viewReducer"
import {DEFAULT_STATE} from "../default-state"
import {AppState} from "../../model/View"


export const rootReducer = (previousState: AppState = DEFAULT_STATE, action: Action): AppState => ({
    ...previousState,
    view: viewReducer(previousState.view, action),
})

