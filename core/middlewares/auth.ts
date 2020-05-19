import Config from '../config/config';
import Queries from '../util/queries';
import { TheError } from '../util/utils';

const config: Config = new Config(process);

// this sould query the auth microservice to find
const authentify = async (data: Object) => {
  try {
    const resp = await Queries.post(`${config.authApi}/verify`, data);
    return resp;
  } catch (error) {
    return null;
  }
};

const AuthMiddleware = (req: any, res: any, next: any) => {
  const error = new TheError('Not authorised', 401);

  const authHeader = req.header('Authorization');
  if (!authHeader) return next(error);

  const parts: any[] = authHeader.split(' ');
  if (parts.length !== 2) return next(error);

  const token = parts[1];
  // Comming soon;
  // console.log('You must be auttenticated to pass');
  if (authentify({})) return next();
  return next(error);
};


export default AuthMiddleware;
