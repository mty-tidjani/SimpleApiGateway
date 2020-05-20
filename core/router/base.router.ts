import express from 'express';

export class BaseRouter {
  config: any;

  router: any;

  constructor(config: any) {
    this.config = config;
    this.router = express.Router();
  }
}
