const store = require('./store')

const onCreateSuccess = function (response) {
  store.survey = response.survey
  $('#message').show('')
  $('#message').text('Success!')
  $('#message').delay(2000).hide('Success!')
}

const onCreateFailure = function () {
  $('#surveybox').text('Something went wrong!')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure
}
