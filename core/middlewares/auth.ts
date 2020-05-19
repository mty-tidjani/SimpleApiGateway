
class AuthMiddleware {
  public static ware = (_req: any, res: any, next: () => void) => {
    // Todo add some logic
    // console.log('You must be auttenticated to pass');
    next();
  }

  public static test = () => {

  }
}


export default AuthMiddleware;
