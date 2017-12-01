import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import { localStorage } from 'services'
import reducer from './reducer'
import epics from './epics'

const epicMiddleware = createEpicMiddleware(epics)

const store = createStore(
  reducer,
  localStorage.loadState(),
  applyMiddleware(logger, epicMiddleware),
)

export default store
