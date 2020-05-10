import AppRoutes from './router';

class Gateway {
  config;

  app;

  constructor(config, app) {
    this.config = config;
    this.app = app;
  }

  initialise = () => {
    const { port } = this.config;

    this.app.use('/api', new AppRoutes(this.config).initRoutes());

    this.app.listen(port, () => {
      console.log(`The api gateway listening on port ${port}.`);
    });
  }
}

export default Gateway;
