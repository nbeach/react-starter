import {createActionFactory} from "../util/action-util"

export const nameLoaded = createActionFactory<{ readonly name: string }>("NAME_LOADED")
export const resetName = createActionFactory("RESET_NAME")
