import { createProxyMiddleware } from 'http-proxy-middleware';

import { BaseRouter } from './base.router';
import auth from '../middlewares/auth';


class TodosRoutes extends BaseRouter {
  initRouter() {
    const { env } = this.config;

    const proxyUrl = env.PROXY_TODO;


    const paths = [
      { url: '/todos', middlewares: [auth] },
      { url: '/checklist' },
    ];


    paths.forEach((path) => {
      const options = { target: proxyUrl, changeOrigin: true };

      const middlewares = path.middlewares || ((r: any, re: any, n: any) => { console.log('No middleware'); n(); });

      this.router.use(path.url, middlewares, createProxyMiddleware(options));
    });
    return this.router;
  }
}

export { TodosRoutes };
