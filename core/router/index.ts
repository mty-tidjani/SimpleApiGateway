import express from 'express';

import TodosRoutes from './todos.routes';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';




export class AppRoutes {
  router: any;

  config: any;

  constructor(config: any) {
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
