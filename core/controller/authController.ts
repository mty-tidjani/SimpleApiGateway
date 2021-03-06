import { Config } from '../config/config';
import { Queries } from '../util/queries';
import { TheError } from '../util/utils';
import { makeToken } from '../util/jwt';
import { Request, Response, NextFunction } from 'express';

class AuthController {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  private sendQuery = async (req: Request, res: Response<any>, next: NextFunction, url: string) => {
    try {
      const resp = Queries.post(url, req.body);

      const token = makeToken(resp, this.config.jwtSecret, this.config.jwtEpire);

      return res.status(200).json({ token });

    } catch (err) {
      if (!err.status) err.status = 500;

      if (!err.message) err.message = 'Internal server Error!';

      const error = new TheError(err.message, err.status);

      return next(error);
    }
  }

  public login = (req: Request, res: Response<any>, next: NextFunction) => {

    return this.sendQuery(req, res, next, `${this.config.authApi}/login`);

  }

  public register = async (req: Request, res: Response<any>, next: NextFunction) => {

    return this.sendQuery(req, res, next, `${this.config.authApi}/register`);

  }
}

export { AuthController };
