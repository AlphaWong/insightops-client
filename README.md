[![Build Status](https://travis-ci.com/AlphaWong/insightops-client.svg?branch=master)](https://travis-ci.com/AlphaWong/insightops-client)
[![codecov](https://codecov.io/gh/AlphaWong/insightops-client/branch/master/graph/badge.svg)](https://codecov.io/gh/AlphaWong/insightops-client)

# objective

As the current official client-side JavaScript logging library for InsightOps do not fit my bussines. I would like to have this pakcage to help.

# limition

It only able to send a simple restful based log. Do not support another npm logger winston

# install

requirment node 12+ ( current lts @ 2019 )

```conosle
yarn add insightops-client
```

# example

```js
import { logger } from 'insightops-client'

// expected log @ insightops will be
// {
//   "event": {
//     "message": "hello world",
//     "stringify": "{\"key\":\"value\"}"
//   }
// }
const log = logger('LOG_KEY')
log.info({
  message: 'hello world!!!',
  data: {
    key: 'value'
  }
})
```

# test by ur self

```console
LOG_KEY=uuid npx jest
```

# curl

```console
curl -X POST \
 https://us.js.logs.insight.rapid7.com/v1/logs/YOUR_LOG_TOKLEN \
 -H 'Accept: _/_' \
 -H 'Accept-Encoding: gzip, deflate' \
 -H 'Cache-Control: no-cache' \
 -H 'Connection: keep-alive' \
 -H 'Content-Length: 56' \
 -H 'Content-Type: application/json' \
 -H 'Host: us.js.logs.insight.rapid7.com' \
 -H 'User-Agent: PostmanRuntime/7.19.0' \
 -H 'X-Requested-With: XMLHttpRequest' \
 -H 'cache-control: no-cache' \
 -d '{"event":{"message":"123", "data":"321"},"level":"INFO"}'
```

# about log key

<img src="https://i.imgur.com/t0Il9K5.png">
