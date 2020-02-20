const config = require('./../config')
const store = require('./../store.js')

const getThisSurveyAnswers = (id) => {
  return $.ajax({
    url: config.apiUrl + '/answers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'answer': {
        'surveyRef': store.survey._id
      }
    }
  })
}

module.exports = {
  getThisSurveyAnswers
}
