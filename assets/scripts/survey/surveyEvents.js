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

// const onUsersRequest = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const data = getFormFields(form)
//
//   console.log(data)
//   $('.answer1').append(data.answer1)
//   $('.answer2').append(data.answer2)
//   $('.answer3').append(data.answer3)
//   $('.answer4').append(data.answer4)
// }

const addHandlers = function () {
  $('#createSurvey').on('submit', onCreateSurvey)
  $('.surveyIndex').on('click', onShowSurveys)
  // $('#userRequest').on('submit', onUsersRequest)
}

module.exports = {
  addHandlers
}
