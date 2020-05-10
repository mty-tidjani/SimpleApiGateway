require('dotenv').config();
const express = require('express');

import router from "./router";

const app = express();
const port = process.env.APP_PORT;

// app.use('/dddddddd', exampleProxy);

app.use('/api', router);

app.listen(port, function () {
  console.log(`The api gateway listening on port ${port}.`);
});
