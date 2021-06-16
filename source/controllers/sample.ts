import { Request, Response, NextFunction } from 'express'
import logging from '../config/logging';

const NAMESPACE = 'Sample controller';

const sampleHelthCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `Sample route has been called`);

  return res.status(200).json({ message: 'pong' })
}


export default { sampleHelthCheck }