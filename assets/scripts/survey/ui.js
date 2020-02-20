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
  $('#surveybox').html(onGetAllSurveysHtml)
}

const onGetAllSurveysFailure = (response) => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onGetOneSurveySuccess = (response) => {
  const showThisSurvey = showOneSurvey({ survey: response.survey })
  $('#surveybox').html(showThisSurvey)
}

const onGetOneSurveyFailure = () => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onDeleteSurveyFailure = () => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetAllSurveysSuccess,
  onGetAllSurveysFailure,
  onGetOneSurveySuccess,
  onGetOneSurveyFailure,
  onDeleteSurveyFailure
}
