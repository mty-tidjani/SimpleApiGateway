
import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import todoRoutes from './todos.routes';
import router from './auth.routes';
import TodosRoutes from './todos.routes';

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
    this.router.use('/auth', authRoutes);
    this.router.use('/users', userRoutes);

    return this.router;
  }
}


export default AppRoutes;
