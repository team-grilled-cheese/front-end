const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../lib/get-form-fields')

const onCreateSurvey = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createSurvey(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const addHandlers = function () {
  $('#survey').on('submit', onCreateSurvey)
}

module.exports = {
  addHandlers
}
