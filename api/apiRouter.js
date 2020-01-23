const express = require('express');

const apiRouter = express.Router();

const apiDocs = `
  <h1>Welcome to Chefs API!</h1>
  <div>
    <h2>Table 1</h2>
    <ul>
      <li>Route 1</li>
    </ul>
  </div>
  <div>
    <h2>Table 2</h2>
    <ul>
      <li>Route 1</li>
    </ul>
  </div>
`

apiRouter.use('/', (req, res) => {
  res.status(200).send(apiDocs);
})

module.exports = apiRouter;