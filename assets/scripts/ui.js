const store = require('./store')

const onCreateSuccess = function (response) {
  store.survey = response.survey
  $('#surveybox').text('Success!')
}

const onCreateFailure = function () {
  $('#surveybox').text('Something went wrong!')
}

const onIndexSuccess = function (response) {
  response['surveys'].forEach(function (survey) {
    $('.content').append('<h5>' + survey.title + '</h5>')
  })
  $('.index').hide()
  $('.close').show()
}

const onIndexFailure = function (response) {
  $('#show_all').text('Something went wrong!')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexFailure,
  onIndexSuccess
}
