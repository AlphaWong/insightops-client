'use strict'

const axios = require('axios')

const BASE_URI = 'https://us.js.logs.insight.rapid7.com'
const POST_PATH = '/v1/logs/'

const LOG_LEVEL = {
  LOG: 'LOG',
  WARN: 'WARN',
  ERROR: 'ERROR',
  INFO: 'INFO'
}

const Logger = ({ token, level, message, data }) => {
  return axios.post(
    `${BASE_URI}${POST_PATH}${token}`,
    {
      level,
      event: {
        message,
        data,
        stringify: JSON.stringify(data)
      }
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

const logger = token => {
  const log = ({ message, data }) =>
    Logger({ token: token, level: LOG_LEVEL.LOG, message, data })

  const warm = ({ message, data }) =>
    Logger({ token: token, level: LOG_LEVEL.WARN, message, data })

  const error = ({ message, data }) =>
    Logger({ token: token, level: LOG_LEVEL.ERROR, message, data })

  const info = ({ message, data }) =>
    Logger({ token: token, level: LOG_LEVEL.INFO, message, data })

  return {
    log,
    warm,
    error,
    info
  }
}

module.exports = { Logger, logger, LOG_LEVEL }
