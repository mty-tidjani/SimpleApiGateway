class Config {
  private processor : NodeJS.Process;

  env: any;

  port: Number;

  logDir: string;

  authApi: string;

  constructor(process: NodeJS.Process) {
    this.processor = process;
  }

  getConfig() {
    this.env = this.processor ? this.processor.env : process.env;
    this.port = this.env.APP_PORT;
    this.logDir = this.env.LOG_DIR;
    this.authApi = this.env.PROXY_AUTH;
    return this;
  }
}

export default Config;
