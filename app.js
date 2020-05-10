import gateway from 'fast-gateway';


import middle from './core/middlewares/hello';
const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";

import router from "./router";

const app = express();

// app.use('/dddddddd', exampleProxy);

app.use('/api', router);

app.listen(3023, function () {
  console.log('Example app listening on port 3023.');
});
