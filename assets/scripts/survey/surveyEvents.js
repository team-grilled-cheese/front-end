const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')

const onCreateSurvey = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  store.surveyQuestion = data.survey.question
  store.possibleAnswersArray = []
  store.possibleAnswersArray.push(data.answer1)
  store.possibleAnswersArray.push(data.answer2)
  store.possibleAnswersArray.push(data.answer3)
  store.possibleAnswersArray.push(data.answer4)

  api.createSurvey()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onShowSurveys = () => {
  event.preventDefault()

  api.showAllSurveys()
    .then(ui.onGetAllSurveysSuccess)
    .catch(ui.onGetAllSurveysFailure)
}

const onShowOneSurvey = (event) => {
  const id = $(event.target).closest('section').data('id')

  api.onShowOneSurvey(id)
    .then(ui.onGetOneSurveySuccess)
    .catch(ui.onGetOneSurveyFailure)
}

const addHandlers = function () {
  $('#createSurvey').on('submit', onCreateSurvey)
  $('.surveyIndex').on('click', onShowSurveys)
  $('#surveybox').on('click', '.surveyList', onShowOneSurvey)
}

module.exports = {
  addHandlers
}
