import { createProxyMiddleware } from 'http-proxy-middleware';

import auth from '../middlewares/auth';
import baseRouter from './base.router';

require('dotenv').config();

export class UserRoutes extends baseRouter {
  initRouter() {
    const { env } = this.config;

    const proxyUrl = env.PROXY_USERS;

    const options = {
      target: proxyUrl, // target host
      changeOrigin: true, // needed for virtual hosted sites
    };

    this.router.use('/', auth, createProxyMiddleware(options));

    return this.router;
  }
}

export default UserRoutes;
