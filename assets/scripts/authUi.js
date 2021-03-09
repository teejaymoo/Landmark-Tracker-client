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
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $(document).ready(function () {
    $('#message').text('Signed in successfully').fadeIn('fast', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  $('#auth-container').hide()
  $('#header').show()
  $('#create-content').show()
  $('#creation-content').show()
  $('#sign-out').show()
  $('#viewLandmarks-button').show()
}

const signInFailure = function (error) {
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('slow', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $(document).ready(function () {
    $('#message').text('Successfully signed out!').fadeIn('slow', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran and nothing was returned!')
  $('').trigger('reset')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text(errorMessage)
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $(document).ready(function () {
    $('#message').text('Password is updated.').fadeIn('slow', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $(document).ready(function () {
    $('#message').text(errorMessage).fadeIn('slow', function () {
      $('#message').delay(2000).fadeOut()
    })
  })
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
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
