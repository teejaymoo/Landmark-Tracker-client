'use strict'

const createLandmarkSuccess = function () {
  $(document).ready(function () {
    $('#creation-message').text("Landmark Created! Please close and then click 'View All Your Landmarks' to see your list").fadeIn('fast', function () {
      $('#creation-message').delay(5000).fadeOut()
    })
  })
  $('#creation-message').removeClass()
  $('#creation-message').addClass('success')
  $('form').trigger('reset')
  $('#landmark-display').hide()
}

const createLandmarkFail = function () {
  $('#creation-message').text('Unable to create a landmark, Please try again.')
  $('#creation-message').removeClass()
  $('#creation-message').addClass('failure')
  $('form').trigger('reset')
}

const viewAllLandmarksSuccess = function (response) {
  $(document).ready(function () {
    $('#message').text("Here's all of the landmarks you have marked.").fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#landmark-display').show()
  const landmarks = response.landmarks
  let landmarksHtml = ''
  landmarks.forEach(landmark => {
    landmarksHtml += `
      <h4>Name: ${landmark.name}</h4>
      <p>City: ${landmark.city}</p>
      <p>Country: ${landmark.country}</p>
      <p>Comment: ${landmark.comment}</p>
      <button class="landmark-delete-dynamic" data-id=${landmark._id}>
      Remove Landmark
      </button>
      <form class="landmark-update-dynamic" data-id=${landmark._id}>
        <input autocomplete="on" value="${landmark.name}" spellcheck="true" type="text" name="landmark[name]" placeholder="Update The Name Here" required>
        <input autocomplete="on" value="${landmark.city}" spellcheck="true" type="text" name="landmark[city]" placeholder="Update The City Here" required>
        <input autocomplete="on" value="${landmark.country}" spellcheck="true" type="text" name="landmark[country]" placeholder="Update The Country Here" required>
        <input autocomplete="on" value="${landmark.comment}" spellcheck="true" type="text" name="landmark[comment]" placeholder="Update The Comment Here" required>
        <button>
        Update Landmark
        </button>
      </form>
      <hr>
    `
  })
  $('#landmark-display').html(landmarksHtml)
  $('form').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const viewAllLandmarksFail = function () {
  $(document).ready(function () {
    $('#message').text('Unable to view landmarks, Please try again.').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const deleteLandmarkSuccess = function () {
  $(document).ready(function () {
    $('#message').text('Landmark removed, Please click "View All Your Landmarks" to view your new list').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#landmark-display').hide()
}

const deleteLandmarkFail = function () {
  $(document).ready(function () {
    $('#message').text('Unable to remove. Please try again').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const updateLandmarkSuccess = function () {
  $(document).ready(function () {
    $('#message').text('Successfully Updated a landmark! Please click "View All Your Landmarks" to see your update.').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('form').trigger('reset')
  $('#landmark-display').hide()
}

const updateLandmarkFail = function () {
  $(document).ready(function () {
    $('#message').text('Unable to update landmark. Please try again').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
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
