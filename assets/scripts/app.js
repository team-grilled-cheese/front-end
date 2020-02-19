'use strict'
const surveyEvents = require('./survey/surveyEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.changePassNav').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#surveybox').hide()
  authEvents.addHandlers()
  // your JS code goes here
  surveyEvents.addHandlers()
})
