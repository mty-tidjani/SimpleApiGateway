
class AuthMiddleware {
  static ware = (_req: any, res: any, next: () => void) => {
    console.log('Hello');
    console.log('You must be auttenticated to pass');
    next();
  }
}


export default AuthMiddleware.ware;
