import {AppState, ViewState} from "../../../model/AppState"
import {objectCreatorFactory} from "./objectCreatorFactory"

export const createViewState = objectCreatorFactory<ViewState>({
    name: "",
})

export const createAppState = objectCreatorFactory<AppState>({
    view: createViewState(),
})
