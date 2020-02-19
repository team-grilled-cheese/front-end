const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../lib/get-form-fields')

const onCreateSurvey = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.createSurvey(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexSurvey = (event) => {
  event.preventDefault()

  api.indexSurvey()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCloseIndex = (event) => {
  event.preventDefault()
  $('.content').empty()
  $('.index').show()
  $('.close').hide()
}

const addHandlers = function () {
  $('#survey').on('submit', onCreateSurvey)
  $('#index').on('submit', onIndexSurvey)
  $('.close').on('click', onCloseIndex)
}

module.exports = {
  addHandlers
}
