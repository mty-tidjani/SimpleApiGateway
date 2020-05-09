const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";


const router = express.Router();

import middle from "../core/middlewares/hello";


const proxyUrl = 'http://127.0.0.1:8180/v5';


const paths = [
  {url: '/users', middlewares: [middle]},
  {url: '/auth'}
];

const options = {
  target: 'http://localhost:8180/vnems', // target host
  changeOrigin: true, // needed for virtual hosted sites
  router: {'/users': 'http://localhost:8180/v23','/auth' : 'http://localhost:8180/v34'}
};

router.use('/', createProxyMiddleware(options) )


const userRoutes = {
  paths,
  proxyUrl, 
}

export default router;
