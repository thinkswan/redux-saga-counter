import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

// Worker saga: Log a message to the console
function* helloSaga () {
  console.log('Hello sagas!')
}

// Worker saga: Preform the async increment task
export function* incrementAsync () {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

// Watcher saga: spawn a new incrementAsync task for each INCREMENT_ASYNC action
function* watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// Export a single entry point to start all sagas
export default function* rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
