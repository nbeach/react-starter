import {applyMiddleware, compose, createStore} from "redux"
import rootReducer from "./reducer/rootReducer"
import rootSaga from "./saga/rootSaga"
import createSagaMiddleware from "@redux-saga/core"

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initializeStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)

    return store
}
