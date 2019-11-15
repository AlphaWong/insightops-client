'use strict'

const logger = require('./index.js')
const axios = require('axios')
const nock = require('nock')
axios.defaults.adapter = require('axios/lib/adapters/http')

const requestJSON = {
  message: 'hello world',
  data: { key: 'value' }
}

test('fire correct LOG json to insignOps', async () => {
  const scope = nock('https://us.js.logs.insight.rapid7.com')
    .post('/v1/logs/uuid', {
      level: logger.LOG_LEVEL.LOG,
      event: {
        ...requestJSON,
        stringify: JSON.stringify(requestJSON.data)
      }
    })
    .once()
    .reply(200, 'test response')

  const log = logger.logger(process.env.LOG_KEY)
  await log.log(requestJSON)
  expect(scope.isDone()).toBe(true)
})

test('fire correct INFO json to insignOps', async () => {
  const scope = nock('https://us.js.logs.insight.rapid7.com')
    .post('/v1/logs/uuid', {
      level: logger.LOG_LEVEL.INFO,
      event: {
        ...requestJSON,
        stringify: JSON.stringify(requestJSON.data)
      }
    })
    .once()
    .reply(200, 'test response')

  const log = logger.logger(process.env.LOG_KEY)
  await log.info(requestJSON)
  expect(scope.isDone()).toBe(true)
})

test('fire correct WARN json to insignOps', async () => {
  const scope = nock('https://us.js.logs.insight.rapid7.com')
    .post('/v1/logs/uuid', {
      level: logger.LOG_LEVEL.WARN,
      event: {
        ...requestJSON,
        stringify: JSON.stringify(requestJSON.data)
      }
    })
    .once()
    .reply(200, 'test response')

  const log = logger.logger(process.env.LOG_KEY)
  await log.warm(requestJSON)
  expect(scope.isDone()).toBe(true)
})

test('fire correct ERROR json to insignOps', async () => {
  const scope = nock('https://us.js.logs.insight.rapid7.com')
    .post('/v1/logs/uuid', {
      level: logger.LOG_LEVEL.ERROR,
      event: {
        ...requestJSON,
        stringify: JSON.stringify(requestJSON.data)
      }
    })
    .once()
    .reply(200, 'test response')

  const log = logger.logger(process.env.LOG_KEY)
  await log.error(requestJSON)
  expect(scope.isDone()).toBe(true)
})
