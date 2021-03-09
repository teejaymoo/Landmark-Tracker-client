'use strict'

const store = require('./store')

const createLandmarkSuccess = function (data) {
  $('#message').text('Created landmark successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createLandmarkSuccess ran. Data is :', data)
}

const createLandmarkFail = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createLandmarkFail ran. Error is :', error)
}

const viewAllLandmarksSuccess = function (response) {
  const landmarks = response.landmarks
  let landmarksHtml = ''
  landmarks.forEach(landmark => {
    landmarksHtml += `
      <h4>Name: ${landmark.name}</h4>
      <p>ID: ${landmark._id}</p>
      <p>City: ${landmark.city}</p>
      <p>Country: ${landmark.country}</p>
      <p>Comment: ${landmark.comment}</p>
    `
  })
  $('#landmark-display').html(landmarksHtml)
}

const viewAllLandmarksFail = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('viewAllLandmarksFail ran. Error is :', error)
}

module.exports = {
  createLandmarkSuccess,
  createLandmarkFail,
  viewAllLandmarksSuccess,
  viewAllLandmarksFail
}
