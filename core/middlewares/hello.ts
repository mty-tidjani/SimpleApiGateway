class HelloMiddleware {
  static ware = (req: any, res: any, next: any) => {
    // Todo add some logic here
    // console.log('You can log request here!');
    next();
  }
}

export default HelloMiddleware.ware;
