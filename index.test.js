'use strict'

const logger = require('./index.js')
const axios = require('axios')
const nock = require('nock')
axios.defaults.adapter = require('axios/lib/adapters/http')

test('fire correct json to insignOps', async () => {
  const scope = nock('https://us.js.logs.insight.rapid7.com')
    .post('/v1/logs/uuid')
    .once()
    .reply(200, 'test response')

  const log = logger.logger(process.env.LOG_KEY)
  await log.info({
    message: 'hello world',
    data: { key: 'value' }
  })
  expect(scope.isDone()).toBe(true)
})
