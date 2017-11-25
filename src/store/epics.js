import { combineEpics } from 'redux-observable'

const epics = []

const req = require.context('.', true, /\.\/.+\/epics\.js$/)

req.keys().forEach((key) => {
  epics.push(req(key).default)
})

export default combineEpics(...epics)
