const store = require('./../store')
const surveysTemplate = require('../templates/survey-listing.handlebars')
const showOneSurvey = require('../templates/oneSurvey.handlebars')

const onCreateSuccess = function (response) {
  store.survey = response.survey
  $('#message').show('')
  $('#message').text('Success!')
  $('#message').delay(2000).hide('Success!')
  $('#createSurvey').trigger('reset')
}

const onCreateFailure = function () {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onGetAllSurveysSuccess = (response) => {
  const onGetAllSurveysHtml = surveysTemplate({surveys: response.surveys})
  $('.sendSurvey').show()
  $('#surveybox').show()
  $('.allSurveyList').html(onGetAllSurveysHtml)
}

const onGetAllSurveysFailure = (response) => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onGetOneSurveySuccess = (response) => {
  const showThisSurvey = showOneSurvey({ survey: response.survey })
  $('#updateSurvey').hide()
  $('#createSurvey').hide()
  $('#surveybox').html(showThisSurvey)
}

const onGetOneSurveyFailure = () => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onUpdateSurveySuccess = function (response) {
  $('#updateSurvey')[0].reset()
  $('#updateSurvey').hide()
}

const onUpdateSurveyFailure = () => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onDeleteSurveyFailure = () => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const sendSurveySuccess = () => {
  $('#message').show('')
  $('#message').text('Survey Submitted!')
  $('#message').delay(2000).hide('Survey Submitted!')
}

const sendSurveyFailure = () => {
  $('#message').show('')
  $('#message').text('Survey not submitted.')
  $('#message').delay(2000).hide('Survey not submitted.')
}

const onDeleteSurveySuccess = () => {
  console.log('successfully deleted!')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetAllSurveysSuccess,
  onGetAllSurveysFailure,
  onGetOneSurveySuccess,
  onGetOneSurveyFailure,
  onDeleteSurveyFailure,
  onUpdateSurveyFailure,
  onUpdateSurveySuccess,
  sendSurveySuccess,
  sendSurveyFailure,
  onDeleteSurveySuccess
}
