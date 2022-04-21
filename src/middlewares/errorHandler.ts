import { ErrorRequestHandler } from "express";
import { say } from "../utils";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const { message = "Error occured", statusCode = 401 } = err;
    const response = [false, message, err] as const;
    res.status(statusCode).json(say(...response));
};

export { errorHandler };