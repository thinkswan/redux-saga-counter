import test from 'tape'

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './sagas'

test('incrementAsync saga test', assert => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync saga must be done'
  )

  assert.end()
})
