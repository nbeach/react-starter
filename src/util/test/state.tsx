import configureStore from "redux-mock-store"
import {AppState} from "../../model/view"

export const mockStateStore = (state: AppState) => configureStore()(state)

