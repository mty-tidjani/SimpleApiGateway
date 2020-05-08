import userRoutes from "./user.routes";
import todoRoutes from "./todos.routes";

const transform = (...args) => {
  const tab = [];

  args.forEach(routers => {
    routers.paths.forEach(path => {
      tab.push({
       prefix: path.url,
       target: routers.proxyUrl,
       middlewares: path.middlewares || []
      });
    });
  })
  return tab;
}

const routes = transform(userRoutes, todoRoutes)


export default routes;
