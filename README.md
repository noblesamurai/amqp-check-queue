# Amqp-check-queue [![Build Status](https://secure.travis-ci.org/noblesamurai/amqp-check-queue.png?branch=master)](http://travis-ci.org/noblesamurai/amqp-check-queue) [![NPM version](https://badge-me.herokuapp.com/api/npm/amqp-check-queue.png)](http://badges.enytc.com/for/npm/amqp-check-queue)

> Check status of an AMQP queue.

## Purpose
Provides info on an AMQP queue including consume and message counts.

## Usage

```js
const config = { /* amqp config */ };
const amqplib = require('amqplib');
const expect = require('chai').expect;
const conn = amqp.connect(config);
const checkQueue = require('amqp-check-queue');
const result = await checkQueue(conn, 'test');
expect(result).to.be.an('object');
console.log(result);
```
Outputs:
```js
{
  queue: 'test',
  messageCount: 0,
  consumerCount: 0
}
```

## API

<a name="amqp-check-queue
Check queue status.module_"></a>

## amqp-check-queue
Check queue status. ⇒ <code>string</code> \| <code>object</code>
cf https://www.squaremobius.net/amqp.node/channel_api.html#channel_checkQueue

**Returns**: <code>string</code> \| <code>object</code> - 'not-found' or queue details.

| Param | Type | Description |
| --- | --- | --- |
| conn | <code>\*</code> | connection from amqplib |
| queue | <code>string</code> | name of queue |


Note: To regenerate this section from the jsdoc run `npm run docs` and paste
the output above.

## Installation

This module is installed via npm:

``` bash
$ npm install amqp-check-queue
```
## License

The BSD License

Copyright (c) 2018, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

