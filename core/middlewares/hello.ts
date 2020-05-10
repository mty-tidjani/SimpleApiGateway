class HelloMiddleware {
  static ware = (req: any, res: any, next: any) => {
    console.log('Hello');
    console.log('You can log request here!');
    next();
  }
}

export default HelloMiddleware.ware;
