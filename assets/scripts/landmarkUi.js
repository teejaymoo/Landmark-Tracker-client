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
    <button class="landmark-delete-dynamic" data-id=${landmark._id}>
      Delete
    </button>
    <div>
      <h4>${store.user.email}</h4>
      <h4>Name: ${landmark.name}</h4>
      <p>ID: ${landmark._id}</p>
      <p>City: ${landmark.city}</p>
      <p>Country: ${landmark.country}</p>
      <p>Comment: ${landmark.comment}</p>
      <form class="landmark-update-dynamic" data-id=${landmark._id}>
        <input id="remove-a" autocomplete="on" spellcheck="true" type="text" name="landmark[name]" placeholder="Update The Name Here" >
        <input id="remove-b" autocomplete="on" spellcheck="true" type="text" name="landmark[city]" placeholder="Update The City Here" >
        <input id="remove-c" autocomplete="on" spellcheck="true" type="text" name="landmark[country]" placeholder="Update The Country Here" >
        <input id="remove-d" autocomplete="on" spellcheck="true" type="text" name="landmark[comment]" placeholder="Update The Comment Here" >
        <button>
        Update Landmark
        </button>
      </form>
      <hr>
      </div>
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
