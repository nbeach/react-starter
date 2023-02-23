import configureStore from "redux-mock-store"
import {AppState} from "../../model/View"

export const mockStateStore = (state: AppState) => configureStore()(state)

