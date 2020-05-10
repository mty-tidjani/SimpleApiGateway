const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";


const router = express.Router();

import auth from "../core/middlewares/auth";
import middle from "../core/middlewares/hello";

const proxyUrl = 'http://127.0.0.1:8180/v5';


const options = {
  target: 'http://localhost:8180/vnems', // target host
  changeOrigin: true, // needed for virtual hosted sites
};

router.use('/', auth ,createProxyMiddleware(options) )


export default router;
