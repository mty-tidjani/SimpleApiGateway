import { Response, Request, NextFunction } from 'express';

const middle = (req: Request, res: Response<any>, next: NextFunction) => {
  // Todo add some stuff here
  next();
};

export default middle;
