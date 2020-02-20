'use strict'
const store = require('./../../store.js')

const equal = function (value1, options) {
  if (value1 !== store.user._id) {
    return options.inverse(this)
  } else {
    return options.fn(this)
  }
}

module.exports = equal
