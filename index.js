

/**
 * Transform value into promise.
 *
 * @param {Any} value
 * @return {Promise}
 * @api public
 */

module.exports = (value) => {
  return new Promise((resolve, reject) => {
    if (typeof value === 'function') value(resolve, reject)
    else resolve(value)
  })
}
