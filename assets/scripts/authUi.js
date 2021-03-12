'use strict'
const errorMessage = 'Something went wrong, Please try again'
const store = require('./store')

const signUpSuccess = function (data) {
  $(document).ready(function () {
    $('#message').text('Signed up successfully').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $(document).ready(function () {
    $('#message').text('Signed in successfully').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  store.user = data.user
  $('#auth-container').hide()
  $('#header').show()
  $('#create-content').show()
  $('#creation-content').show()
  $('#sign-out').show()
  $('#viewLandmarks-button').show()
  $('#account-modal').show()
  $('#create-modal-button').show()
}

const signInFailure = function () {
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('slow', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $(document).ready(function () {
    $('#message').text('Successfully signed out!').fadeIn('slow', function () {
      $('#message').delay(4000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $(document).ready(function () {
    $('#another-message').text('Successfully signed out!').fadeIn('slow', function () {
      $('#another-message').delay(4000).fadeOut()
    })
  })
  $('#another-message').removeClass()
  $('#another-message').addClass('failure')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $(document).ready(function () {
    $('#another-message').text('Password is updated.').fadeIn('slow', function () {
      $('#another-message').delay(2000).fadeOut()
    })
  })
  $('#another-message').removeClass()
  $('#another-message').addClass('success')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $(document).ready(function () {
    $('#another-message').text(errorMessage).fadeIn('slow', function () {
      $('#another-message').delay(2000).fadeOut()
    })
  })
  $('#another-message').removeClass()
  $('#another-message').addClass('failure')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
