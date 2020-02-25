const Analytics = require('analytics-node');
const analytics = new Analytics(process.env.SEGMENT_WRITE_KEY, { flushAt: 1 });

module.exports = (request, response) => {
  console.log('Catching Wbhook');

  if (request.query && request.query['hub.challenge']) {
    console.log(`Responding to challenge ${request.query['hub.challenge']}`);

    analytics.track({
      userId: 1337,
      event: 'Webhook Caught With Challenge',
      properties: request.query,
    });

    response.send(request.query['hub.challenge']);
  } else {
    if (request.body) {
      console.log('Webhook payload', request.body);

      analytics.track({
        userId: 1337,
        event: 'Webhook Caught',
        properties: request.body.data,
      });
    } else {
      console.log('Webhook without payload.');

      analytics.track({
        userId: 1337,
        event: 'Webhook Caught Without Payload',
      });
    }

    response.send('teacup');
  }
};
