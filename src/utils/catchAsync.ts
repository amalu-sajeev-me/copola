import { RequestHandler } from "express";
import { asyncRequestHandler } from "./types";


const catchAsync = (fn: asyncRequestHandler): RequestHandler => {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
};

export { catchAsync };