/**
 * @module amqp-check-queue
 * Check queue status.
 * @param {*} conn - connection from amqplib
 * @param {string} queue - name of queue
 * @returns {string|object} 'not-found' or queue details.
 * @description
 * cf https://www.squaremobius.net/amqp.node/channel_api.html#channel_checkQueue
 */
module.exports = async function checkAMQP (conn, queue) {
  const channel = await conn.createChannel();
  channel.on('error', () => {});
  const result = await (channel.checkQueue(queue));
  return result;
};
