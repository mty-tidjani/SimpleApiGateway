import middle from "../middlewares/hello";

const proxyUrl = 'http://127.0.0.1:8180'

const paths = [
  {url: '/users', middlewares: [middle]},
  {url: '/auth'}
];

const userRoutes = {
  paths,
  proxyUrl, 
}
export default userRoutes;
