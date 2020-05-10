import router from '../router';

class Gateway {
  config;

  app;

  constructor(config, app) {
    this.config = config;
    this.app = app;
  }

  initialise = () => {
    const port = process.env.APP_PORT;

    // app.use('/dddddddd', exampleProxy);
    console.log(process.env.PROXY_AUTH);

    this.app.use('/api', router);

    this.app.listen(port, () => {
      console.log(`The api gateway listening on port ${port}.`);
    });
  }
}

export default Gateway;
