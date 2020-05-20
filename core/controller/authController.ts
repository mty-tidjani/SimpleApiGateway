import Config from '../config/config';
import queries from '../util/queries';
import { TheError } from '../util/utils';
import { makeToken } from '../util/jwt';

class authController {
  config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  public login = async (req: any, res: any, next: (arg0: Error) => void) => {
    try {
      const resp = queries.post(`${this.config.authApi}/login`, req.body);
      const token = makeToken(resp, this.config.jwtSecret, this.config.jwtEpire);
      return res.status(200).json({ token });
    } catch (err) {
      const error = new TheError(err.message, err.status);
      return next(error);
    }
  }
}

export default authController;