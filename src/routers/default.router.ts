import { RequestHandler } from "express";
import { scream } from "../utils/APIError";

const defaultRoute: RequestHandler = () => {
    const notFoundError = [404, "Page Not Found"] as const;
    scream(...notFoundError);
};

export { defaultRoute };