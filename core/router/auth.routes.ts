import { createProxyMiddleware } from 'http-proxy-middleware';

import middle from '../middlewares/middle';
import { BaseRouter } from './base.router';
import { AuthController } from '../controller/authController';

class AuthRoutes extends BaseRouter {
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

    const authCtrl = new AuthController(this.config);

    this.router.use('/login', authCtrl.login);

    this.router.use('/register', authCtrl.register);

    this.router.use('/', middle, createProxyMiddleware(options));

    return this.router;
  }
}

export { AuthRoutes };
