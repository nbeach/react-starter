import {Action} from "redux"
import {ViewState} from "../../model/View"
import {isAction} from "../../util/action-util"
import {toDoItemsLoaded} from "../../model/Action"

export const viewReducer = (priorState: ViewState, action: Action): ViewState => {

    if (isAction(toDoItemsLoaded, action)) {
        return {
            ...priorState,
            todoItems: action.items.map(item => ({
                id: Number(item.id),
                description: item.text,
                important: item.highPriority
            }))
        }
    }

    return priorState
}