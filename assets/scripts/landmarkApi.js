'use strict'

const config = require('./config')
const store = require('./store')

const createLandmark = function (data) {
  return $.ajax({
    url: config.apiUrl + '/landmarks',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token // IMPORTANT
    },
    data
  })
}

const indexLandmark = function (data) {
  return $.ajax({
    url: config.apiUrl + '/landmarks',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token // IMPORTANT
    },
    data
  })
}

const showLandmark = function (data) {
  return $.ajax({
    url: config.apiUrl + '/landmarks/' + store.landmark._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token // IMPORTANT
    },
    data
  })
}

const deleteLandmark = function (id) {
  return $.ajax({
    url: config.apiUrl + '/landmarks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token // IMPORTANT
    }
  })
}
const updateLandmark = function (id, data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/landmarks/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token // IMPORTANT
    },
    data
  })
}

module.exports = {
  createLandmark,
  indexLandmark,
  showLandmark,
  deleteLandmark,
  updateLandmark
}
