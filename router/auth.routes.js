const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";


const router = express.Router();

import middle from "../core/middlewares/hello";


const proxyUrl = process.env.PROXY_AUTH;
const otherProxyUrl = process.env.PROXY_AUTH_OTHER;

// if you 
const otherAuthServices = {'/other': otherProxyUrl};

const options = {
  target: proxyUrl,
  changeOrigin: true,
  router: otherAuthServices // if you wish to send other request to other microservce
};

router.use('/', createProxyMiddleware(options) )


export default router;
