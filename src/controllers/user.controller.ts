import { scream } from "../utils/APIError";
import { existingUser, createUser } from "../models/user.model";
import { asyncRequestHandler } from "../utils/types";

const createAccount: asyncRequestHandler = async (req, res) => {
    const { body: userData } = req;
    const err = [401, "Username Already Exists", null] as const;
    (await existingUser(userData.username)) && scream(...err);
    const user = await createUser(userData);
    return res.send(user);
};



export { createAccount };
