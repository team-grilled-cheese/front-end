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

module.exports = {
  createSurvey,
  showAllSurveys,
  onShowOneSurvey
}
