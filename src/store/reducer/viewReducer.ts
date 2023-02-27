import {Action} from "redux"
import {ViewState} from "../../model/View"
import {isAction} from "../../util/action-util"
import {toDoItemsLoaded, toggleToDoItemImportantRequested} from "../../model/Action"

export const viewReducer = (priorState: ViewState, action: Action): ViewState => {

    if (isAction(toDoItemsLoaded, action)) {
        return {
            ...priorState,
            toDoItems: action.items.map(item => ({
                id: Number(item.id),
                description: item.text,
                important: item.highPriority
            }))
        }
    }

    if (isAction(toggleToDoItemImportantRequested, action)) {
        return {
            ...priorState,
            toDoItems: priorState.toDoItems.map(
                doWhere(
                    item => item.id === action.id,
                        item => ({ ...item, important: !item.important})
                )
            )
        }
    }

    return priorState
}


const doWhere = <T, R>(condition: (element: T) => boolean, action: (element: T) => R) => {
    return (element: T) => condition(element) ? action(element) : element
}