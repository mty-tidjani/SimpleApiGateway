import { createProxyMiddleware } from 'http-proxy-middleware';
import auth from '../middlewares/hello';
import BaseRouter from './_base.router';


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

      const middlewares = path.middlewares || ((r, re, n) => { console.log('No middleware'); n(); });

      this.router.use(path.url, middlewares, createProxyMiddleware(options));
    });
    return this.router;
  }
}

export default TodosRoutes;
