/**
 * Dependencie(s)
 */

const test = require('tape')
const surething = require('..')


test('should transform string into a promise', assert => {
  assert.plan(1)
  surething('hello')
    .then(val => assert.equal(val, 'hello'))
})


test('should transform number into a promise', assert => {
  assert.plan(1)
  surething(3)
    .then(val => assert.equal(val, 3))
})


test('should transform boolean into a promise', assert => {
  assert.plan(1)
  surething(true)
    .then(val => assert.equal(val, true))
})

test('should transform object into a promise', assert => {
  assert.plan(1)
  surething({name: 'hello'})
    .then(val => assert.deepEqual(val, {name: 'hello'}))
})
