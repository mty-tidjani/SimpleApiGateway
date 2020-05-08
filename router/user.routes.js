const baseUrl = 'http://127.0.0.1:8180'

const paths = [
  '/users',
  '/auth'
]

const userRoutes = [];

paths.forEach(url => {
  userRoutes.push({
    prefix: url,
    target: baseUrl
  });
})

module.exports = userRoutes;
