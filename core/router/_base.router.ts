import Config from '../config/config';

const express = require('express');

class BaseRouter {
  config: Config;

  router: any;

  constructor(config: Config) {
    this.config = config;
    this.router = express.Router();
  }
}

export default BaseRouter;
