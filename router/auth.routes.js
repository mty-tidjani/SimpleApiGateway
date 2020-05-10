const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";


const router = express.Router();

import middle from "../core/middlewares/hello";


const proxyUrl = 'http://127.0.0.1:8180/v5';
const otherProxyUrl = process.env.PROXY_AUTH_OTHER;

// if you 
const otherAuthServices = {'/other': otherProxyUrl};

const options = {
  target: proxyUrl,
  changeOrigin: true,
  router: otherAuthServices // if you wish to send other request to other microservce
};

router.use('/', middle, createProxyMiddleware(options) )


export default router;
