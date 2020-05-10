import { createProxyMiddleware } from 'http-proxy-middleware';
import auth from '../core/middlewares/hello';
import BaseRouter from './_base.router';

const express = require('express');

const router = express.Router();


const proxyUrl = process.env.PROXY_AUTH;


const paths = [
  { url: '/todos', middlewares: [auth] },
  { url: '/checklist' },
];


paths.forEach((path) => {
  const options = { target: proxyUrl, changeOrigin: true };
  console.log(process.env.PROXY_AUTH);

  router.use(path.url, path.middlewares || ((r, re, n) => { console.log('No middleware'); n(); }), createProxyMiddleware(options));
});

class TodosRoutes extends BaseRouter {
  initRouter() {
    return router;
  }
}

export default TodosRoutes;
