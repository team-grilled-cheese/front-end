'use strict'
const surveyEvents = require('./survey/surveyEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

// const answerEvents = require('./answer/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#menu-toggle').hide()
  $('#sign-out').hide()
  $('.changePassNav').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  // $('#createSurvey').hide()
  authEvents.addHandlers()
  surveyEvents.addHandlers()
  $('#updateSurvey').hide()
  // answerEvents.addHandlers()
  $('#menu-toggle').click(function (e) {
    e.preventDefault()
    $('#wrapper').toggleClass('toggled')
  })
})
