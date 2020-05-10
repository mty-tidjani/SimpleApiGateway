const express = require('express');

class BaseRouter {
  config: any;

  router: any;

  constructor(config: any) {
    this.config = config;
    this.router = express.Router();
  }
}

export default BaseRouter;
