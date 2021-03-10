'use strict'

const createLandmarkSuccess = function () {
  $(document).ready(function () {
    $('#message').text('Created landmark successfully, Please click "View All Your Landmarks" to see your landmarks').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const createLandmarkFail = function () {
  $(document).ready(function () {
    $('#message').text('Unable to create a landmark, Please try again.').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const viewAllLandmarksSuccess = function (response) {
  $(document).ready(function () {
    $('#message').text("Here's all of the landmarks you have marked.").fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
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
  $('#landmark-display').trigger('reset')
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
    $('#message').text('Successfully Updated a landmark!').fadeIn('fast', function () {
      $('#message').delay(5000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('html').trigger('reset')
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
