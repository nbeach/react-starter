import {Action} from "redux"
import {ViewState} from "../../model/View"
import {isAction} from "../../util/action-util"
import {resetName} from "../../model/action/ResetNameAction"
import {nameLoaded} from "../../model/action/NameLoadedAction"

export const viewReducer = (priorState: ViewState, action: Action): ViewState => {

    if (isAction(nameLoaded, action)) {
        return {
            ...priorState,
            name: action.name,
        }
    }

    if (isAction(resetName, action)) {
        return {
            ...priorState,
            name: "",
        }
    }

    return priorState
}
