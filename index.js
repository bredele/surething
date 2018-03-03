

module.exports = value => {
  return new Promise((resolve, reject) => {
    if (typeof value === 'function') value(resolve, reject)
    else resolve(value)
  })
}
