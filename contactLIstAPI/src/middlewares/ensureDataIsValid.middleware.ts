import { Request, Response, NextFunction } from "express";

export const ensureDataIsValidMiddleware =
  (schema:any) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validatedData = await schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    req.body = validatedData;
    next();
  };