import middle from "../middlewares/hello";
import auth from "../middlewares/auth";

const proxyUrl = 'http://127.0.0.1:8180'

const paths = [
  {url: 'todos/derri', middlewares: [auth]},
  {url: '/auth'}
];

const todoRoutes = {
  paths,
  proxyUrl, 
}
export default todoRoutes;
