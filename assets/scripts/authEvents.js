'use strict'

const getFormFields = require('./../../lib/get-form-fields')

const authApi = require('./authApi')
const authUi = require('./authUi')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onLogIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.logIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}

const onSignOut = function (event) {

  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#login-form').on('submit', onLogIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
