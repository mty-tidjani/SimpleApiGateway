class Config {
  processor: { env: any; };

  constructor(process: NodeJS.Process) {
    this.processor = process;
  }

  getConfig() {
    const env = this.processor ? this.processor.env : process.env;

    return {
      port: env.APP_PORT,
      logDir: env.LOG_DIR,
      env,
    };
  }
}

export default Config;
