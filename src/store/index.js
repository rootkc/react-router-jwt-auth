import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
import { localStorage } from 'services'
import reducer from './reducer'
import epics from './epics'

export const history = createHistory()

const epicMiddleware = createEpicMiddleware(epics)
const routerHistoryMiddleware = routerMiddleware(history)

const store = createStore(
  reducer,
  localStorage.loadState(),
  applyMiddleware(
    logger,
    routerHistoryMiddleware,
    epicMiddleware,
  ),
)

export default store
