/**
 * Dependencie(s)
 */

const test = require('tape')
const surething = require('..')


test('should transform string into a promise', assert => {
  assert.plan(1)
  surething('hello')
    .then(val => assert.equal(val), 'hello')
})
