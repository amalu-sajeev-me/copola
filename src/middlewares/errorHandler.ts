import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const { message = "Error occured", statusCode = 401 } = err;
    console.error(message);
    res.status(statusCode).send(message);
};

export { errorHandler };