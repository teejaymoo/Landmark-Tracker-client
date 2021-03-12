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

const dynamicallyDeleteLandmark = function (event) {
  event.preventDefault()
  const deleteButton = event.target
  const id = $(deleteButton).data('id')
  // make our update request. Make sure to pass the id and the formData needed to update
  landmarkApi.deleteLandmark(id)
    .then(landmarkUi.deleteLandmarkSuccess)
    .catch(landmarkUi.deleteLandmarkFail)
}

const dynamicallyUpdateLandmark = function (event) {
  event.preventDefault()
  const updateButton = event.target
  const id = $(updateButton).data('id')
  const formData = getFormFields(updateButton)
  // make our update request. Make sure to pass the id and the formData needed to update
  landmarkApi.updateLandmark(id, formData)
    .then(landmarkUi.updateLandmarkSuccess)
    .catch(landmarkUi.updateLandmarkFail)
}

const addHandlers = () => {
  $('#input-content').on('submit', createLandmark)
  $('#viewLandmarks-button').on('click', viewAllLandmarks)
  $('#landmark-display').on('click', '.landmark-delete-dynamic', dynamicallyDeleteLandmark)
  $('#landmark-display').on('submit', '.landmark-update-dynamic', dynamicallyUpdateLandmark)
}

module.exports = {
  addHandlers
}
