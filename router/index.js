
const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";
import userRoutes from "./user.routes";
import todoRoutes from "./todos.routes";

const router = express.Router();

const transform = (...args) => {
 
  args.forEach(routers => {
    routers.paths.forEach(path => {
      const proxy = createProxyMiddleware({target: routers.proxyUrl, changeOrigin: true, router: ['*/*']});
      console.log(path.url, routers.proxyUrl, path.middlewares);
      
      router.use(path.url, path.middlewares || ((r,q, n) => n()), proxy )
    });
  })

  return router;
}



router.use('/nemos', userRoutes)
router.use('/todos', todoRoutes)


export default router;
