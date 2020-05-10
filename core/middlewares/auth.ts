
class AuthMiddleware {
  static ware = (_req: any, res: any, next: () => void) => {
    // Todo add some logic
    // console.log('You must be auttenticated to pass');
    next();
  }
}


export default AuthMiddleware.ware;
