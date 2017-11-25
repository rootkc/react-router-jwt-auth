import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import reducer from './reducer'
import epics from './epics'

const epicMiddleware = createEpicMiddleware(epics)

const store = createStore(
  reducer,
  applyMiddleware(logger, epicMiddleware),
)

export default store
