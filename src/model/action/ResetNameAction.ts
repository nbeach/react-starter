import {createActionFactory} from "../../util/action-util"

export interface NameLoadedAction {
}

export const resetName = createActionFactory<NameLoadedAction>("RESET_NAME")
