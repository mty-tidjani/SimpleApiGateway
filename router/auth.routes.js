import { createProxyMiddleware } from 'http-proxy-middleware';

import middle from '../core/middlewares/hello';

require('dotenv').config();

const express = require('express');


const router = express.Router();


const proxyUrl = process.env.PROXY_AUTH;
const otherProxyUrl = process.env.PROXY_AUTH_OTHER;

// if you
const otherAuthServices = { '/other': otherProxyUrl };

const options = {
  target: proxyUrl,
  changeOrigin: true,
  router: otherAuthServices, // if you wish to send other request to other microservce
};

router.use('/', middle, createProxyMiddleware(options));


export default router;
