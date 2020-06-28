import {NAME_LOADED, RESET_NAME} from "../../model/Action"

export const viewReducer = (priorState, action) => {
    switch(action.type) {

        case NAME_LOADED:
            return {
                ...priorState,
                name: action.name,
            }

        case RESET_NAME:
            return {
                ...priorState,
                name: "",
            }

        default:
            return priorState
    }
}
