const store = require('./../store')
const surveysTemplate = require('../templates/survey-listing.handlebars')
const showOneSurvey = require('../templates/oneSurvey.handlebars')
const api = require('./../answer/api')

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
  store.survey = response.survey
  api.getThisSurveyAnswers()
    .then(showSurveyAnswers)
    .catch()
}

const showSurveyAnswers = (response) => {
  $('.answer1').text(' ')
  $('.answer2').text(' ')
  $('.answer3').text(' ')
  $('.answer4').text(' ')
  store.answersArray = response.answers
  const possibleAnswers = []
  store.survey.possibleAnswers.forEach(answer => {
    possibleAnswers.push(answer)
  })
  const answerArray = []
  store.answersArray.forEach(answer => {
    answerArray.push(answer)
  })
  const allAnswers = []
  for (let i = 0; i < answerArray.length; i++) {
    allAnswers.push(answerArray[i].answer)
  }
  const answer1 = []
  const answer2 = []
  const answer3 = []
  const answer4 = []
  for (let i = 0; i < allAnswers.length; i++) {
    if (allAnswers[i] === possibleAnswers[0]) {
      answer1.push(allAnswers[i])
    } else if (allAnswers[i] === possibleAnswers[1]) {
      answer2.push(allAnswers[i])
    } else if (allAnswers[i] === possibleAnswers[2]) {
      answer3.push(allAnswers[i])
    } else if (allAnswers[i] === possibleAnswers[3]) {
      answer4.push(allAnswers[i])
    }
  }
  $('.answer1').text(`${answer1.length}` + ' users have choosen ' + `${possibleAnswers[0]}`)
  $('.answer2').text(`${answer2.length}` + ' users have choosen ' + `${possibleAnswers[1]}`)
  $('.answer3').text(`${answer3.length}` + ' users have choosen ' + `${possibleAnswers[2]}`)
  $('.answer4').text(`${answer4.length}` + ' users have choosen ' + `${possibleAnswers[4]}`)
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
  $('#message').show('')
  $('#message').text('Survey deleted.')
  $('#message').delay(2000).hide('Survey deleted.')
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
