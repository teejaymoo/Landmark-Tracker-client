'use strict'

const getFormFields = require('./../../lib/get-form-fields')

const landmarkApi = require('./landmarkApi')
const landmarkUi = require('./landmarkUi')

const createLandmark = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  landmarkApi.createLandmark(data)
    .then(landmarkUi.createLandmarkSuccess)
    .catch(landmarkUi.createLandmarkFail)
}

const viewAllLandmarks = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  landmarkApi.indexLandmark(data)
    .then(landmarkUi.viewAllLandmarksSuccess)
    .catch(landmarkUi.viewAllLandmarksFail)
}

const addHandlers = () => {
  $('#input-content').on('submit', createLandmark)
  $('#viewLandmarks-button').on('click', viewAllLandmarks)
  $('#landmark-display').on('click', '.landmark-delete-dynamic', dynamicallyDeleteLandmark)
  $('#landmark-display').on('submit', '.landmark-update-dynamic', dynamicallyUpdateLandmark)
  // $('#login').on('submit', onLogIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
