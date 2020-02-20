const config = require('./../config')
const store = require('./../store.js')

const createSurvey = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'survey': {
        'possibleAnswers': store.possibleAnswersArray,
        'question': store.surveyQuestion
      }
    }
  })
}

const showAllSurveys = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onShowOneSurvey = (id) => {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdateSurvey = (data) => {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + store.SurveyId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'survey': {
        'possibleAnswers': store.possibleAnswersArray,
        'question': store.surveyQuestion
      }
    }})
}

const onDeleteSurvey = (id) => {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onSendAnswers = (data) => {
  return $.ajax({
    url: config.apiUrl + '/answers/' + store.currentSurveyId,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'answer': {
        'answer': store.currentAnswer
      }
    }
  })
}

module.exports = {
  createSurvey,
  showAllSurveys,
  onShowOneSurvey,
  onDeleteSurvey,
  onUpdateSurvey,
  onSendAnswers
}
