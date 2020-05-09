import gateway from 'fast-gateway';


import middle from './core/middlewares/hello';
const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";

import router from "./router";

const app = express();

 
// proxy middleware options
 
// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);
 
// mount `exampleProxy` in web server

app.use('/dddddddd', exampleProxy);

app.use('/api', router);
// app.listen(3000);

app.listen(3023, function () {
  console.log('Example app listening on port 3023.');
});
