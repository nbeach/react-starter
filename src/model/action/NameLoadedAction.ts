import {createActionFactory} from "../../util/action-util"

export interface NameLoadedAction {
    readonly name: string
}

export const nameLoaded = createActionFactory<NameLoadedAction>("NAME_LOADED")
