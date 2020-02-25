module.exports = (request, response) => {
  console.log('Catching!');

  if (request.query && request.query['hub.challenge']) {
    console.log(`Responding to challenge ${request.query['hub.challenge']}`);
    response.send(request.query['hub.challenge']);
  } else {
    console.log({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });

    response.send('teacup');
  }
};
