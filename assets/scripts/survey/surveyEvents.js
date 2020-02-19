const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateSurvey = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createSurvey(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onShowSurveys = () => {
  event.preventDefault()

  api.showAllSurveys()
    .then(ui.onGetAllSurveysSuccess)
    .catch(ui.onGetAllSurveysFailure)
}

const addHandlers = function () {
  $('#survey').on('submit', onCreateSurvey)
  $('.surveyIndex').on('click', onShowSurveys)
}

module.exports = {
  addHandlers
}
