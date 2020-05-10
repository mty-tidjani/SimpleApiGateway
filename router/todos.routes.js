const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";


const router = express.Router();


const proxyUrl = 'http://127.0.0.1:8180/v5';


const paths = [
  {url: '/todos', middlewares: [auth]},
  {url: '/checklist'}
];


paths.forEach(path => {
  const options = { target: proxyUrl, changeOrigin: true };
  console.log(path);
  
  router.use(path.url, path.middlewares || ((r, re, n) => {console.log("No middleware"); n() })  , createProxyMiddleware(options) )
})

const userRoutes = {
  paths,
  proxyUrl, 
}

export default router;
