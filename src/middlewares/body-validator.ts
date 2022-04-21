import { RequestHandler } from "express";
import { scream } from "../utils/APIError";
import { userValidationSchema } from "../models/schemas/user.schema";

const validateUser: RequestHandler = (req, res, next) => {
    const { body: userDetails } = req;
    const { error } = userValidationSchema.validate(userDetails);
    if (error) {
        const validationErr = [403, error.message, error] as const;
        scream(...validationErr);
    }
    next();
};


export { validateUser };