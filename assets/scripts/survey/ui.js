const store = require('./../store')

const onCreateSuccess = function (response) {
  store.survey = response.survey
  $('#message').show('')
  $('#message').text('Success!')
  $('#message').delay(2000).hide('Success!')
}

const onCreateFailure = function () {
  $('#surveybox').text('Something went wrong!')
}

const onGetAllSurveysSuccess = (response) => {
  console.log(response)
}

const onGetAllSurveysFailure = (response) => {
  console.log('this didnt work')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetAllSurveysSuccess,
  onGetAllSurveysFailure
}
