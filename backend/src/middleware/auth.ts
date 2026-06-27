import { Request, Response, NextFunction } from 'express';

export function createBountyCreationSignatureMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    next();
  };
}

export function createStellarSignatureAuthMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    next();
  };
}