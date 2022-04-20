import { RequestHandler } from "express";

const defaultRoute: RequestHandler = (req, res, next) => {
    next(new Error("Page Not Found"));
};

export { defaultRoute };