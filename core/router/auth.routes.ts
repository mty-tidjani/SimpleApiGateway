import { createProxyMiddleware } from 'http-proxy-middleware';

import middle from '../middlewares/middle';
import baseRouter from './base.router';

class AuthRoutes extends baseRouter {
  public initRouter() {
    const { env } = this.config;

    const proxyUrl = env.PROXY_AUTH;
    const otherProxyUrl = env.PROXY_AUTH_OTHER;

    // if you
    const otherAuthServices = { '/other': otherProxyUrl };

    const options = {
      target: proxyUrl,
      changeOrigin: true,
      router: otherAuthServices, // if you wish to send other request to other microservce
    };

    this.router.use('/', middle, createProxyMiddleware(options));

    return this.router;
  }
}

export default AuthRoutes;
