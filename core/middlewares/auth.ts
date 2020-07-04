import { Request, Response, NextFunction } from 'express';
import { Config } from '../config/config';
import { Queries } from '../util/queries';
import { TheError } from '../util/utils';
import { decodeToken } from '../util/jwt';

const config: Config = new Config(process);

// this sould query the auth microservice to find
const authentify = async (data: object) => {
  try {
    const resp = await Queries.post(`${config.authApi}/verify`, data);
    return resp;
  } catch (error) {
    return null;
  }
};

const authMiddleware = (req: Request, res: Response<any>, next: NextFunction) => {
  const error = new TheError('Not authorised', 401);

  const authHeader = req.header('Authorization');
  if (!authHeader) return next(error);

  const parts: any[] = authHeader.split(' ');
  if (parts.length !== 2) return next(error);

  const token = parts[1];
  let data: object;
  try {
    data = decodeToken(token, config.jwtSecret);
  } catch (err) {
    return next(error);
  }
  // Comming soon;
  // console.log('You must be auttenticated to pass');
  const isAuthentic = authentify(data);
  if (isAuthentic) return next();
  return next(error);
};

export default authMiddleware;
