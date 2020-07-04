import { createProxyMiddleware } from 'http-proxy-middleware';

import auth from '../middlewares/auth';
import { BaseRouter } from './base.router';

require('dotenv').config();

class UserRoutes extends BaseRouter {
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

export { UserRoutes };
