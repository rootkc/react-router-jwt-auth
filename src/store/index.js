import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import { localStorage } from 'services'
import reducer from './reducer'
import epics from './epics'
import { history } from '../'

const epicMiddleware = createEpicMiddleware(epics)
const routerHistoryMiddleware = routerMiddleware(history)

const store = createStore(
  reducer,
  localStorage.loadState(),
  applyMiddleware(
    logger,
    epicMiddleware,
    routerHistoryMiddleware,
  ),
)

export default store
