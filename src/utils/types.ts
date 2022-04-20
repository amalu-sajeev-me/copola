import { NextFunction, Request, Response } from "express";


type asyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

export type { asyncRequestHandler };