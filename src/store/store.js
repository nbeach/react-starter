import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './saga/rootSaga'
import { rootReducer } from './reducer/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initializeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)

  return store
}
