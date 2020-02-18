const store = require('./store')

const onCreateSuccess = function (response) {
  store.survey = response.survey
  $('#surveybox').text('Success!')
}

const onCreateFailure = function () {
  $('#surveybox').text('Something went wrong!')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure
}
