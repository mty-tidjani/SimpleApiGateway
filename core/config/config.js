class Config {
  processor;

  constructor(process) {
    this.processor = process;
  }

  getConfig() {
    const env = this.processor ? this.processor.env : process.env;

    return {
      port: env.APP_PORT,
      logDir: env.LOG_DIR,
    };
  }
}

export default Config;
