const expect = require('chai').expect;

describe('amqp-checkqueue', function () {
  it('provide queue status', async function () {
    const checkQueue = require('..');
    const conn = {
      createChannel: () => ({
        checkQueue: () => ({}),
        on: () => {}
      })
    };
    const result = await checkQueue(conn, 'test');
    expect(result).to.be.an('object');
  });
});
