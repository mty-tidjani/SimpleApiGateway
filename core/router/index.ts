
import TodosRoutes from './todos.routes';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';

const express = require('express');


class AppRoutes {
  router;

  config;

  constructor(config) {
    this.router = express.Router();
    this.config = config;
  }

  initRoutes() {
    this.router.use('/', new TodosRoutes(this.config).initRouter());
    this.router.use('/auth', new AuthRoutes(this.config).initRouter());
    this.router.use('/users', new UserRoutes(this.config).initRouter());

    return this.router;
  }
}


export default AppRoutes;
