'use strict'

const store = require('./store')

const createLandmarkSuccess = function (data) {
  $('#message').text('Created landmark successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createLandmarkSuccess ran. Data is :', data)
  $('form').trigger('reset')
}

const createLandmarkFail = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createLandmarkFail ran. Error is :', error)
  $('form').trigger('reset')
}

const viewAllLandmarksSuccess = function (response) {
  const landmarks = response.landmarks
  let landmarksHtml = ''
  landmarks.forEach(landmark => {
    landmarksHtml += `
    <div>
      <h4>Name: ${landmark.name}</h4>
      <p>City: ${landmark.city}</p>
      <p>Country: ${landmark.country}</p>
      <p>Comment: ${landmark.comment}</p>
      <button class="landmark-delete-dynamic" data-id=${landmark._id}>
      Remove Landmark
      </button>
      <form class="landmark-update-dynamic" data-id=${landmark._id}>
        <input id="remove-a" autocomplete="on" spellcheck="true" type="text" name="landmark[name]" placeholder="Update The Name Here" required>
        <input id="remove-b" autocomplete="on" spellcheck="true" type="text" name="landmark[city]" placeholder="Update The City Here" required>
        <input id="remove-c" autocomplete="on" spellcheck="true" type="text" name="landmark[country]" placeholder="Update The Country Here" required>
        <input id="remove-d" autocomplete="on" spellcheck="true" type="text" name="landmark[comment]" placeholder="Update The Comment Here" required>
        <button>
        Update Landmark
        </button>
      </form>
      <hr>
      </div>
    `
  })
  $('#landmark-display').html(landmarksHtml)
  $('form').trigger('reset')
}

const viewAllLandmarksFail = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('viewAllLandmarksFail ran. Error is :', error)
  $('form').trigger('reset')
}

const deleteLandmarkSuccess = function () {
  $('#message').text('Landmark removed')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#landmark-display').trigger('reset')
}

const deleteLandmarkFail = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('deleteLandmarkFail ran. Error is :', error)
  $('form').trigger('reset')
}

const updateLandmarkSuccess = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('html').trigger('reset')
}

const updateLandmarkFail = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('updateLandmarkFail ran. Error is :', error)
  $('form').trigger('reset')
}

module.exports = {
  createLandmarkSuccess,
  createLandmarkFail,
  viewAllLandmarksSuccess,
  viewAllLandmarksFail,
  deleteLandmarkSuccess,
  updateLandmarkSuccess,
  deleteLandmarkFail,
  updateLandmarkFail
}
