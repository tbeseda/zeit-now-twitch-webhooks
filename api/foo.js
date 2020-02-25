module.exports = (req, res) => {
  console.log({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });

  res.send('bar');
};
