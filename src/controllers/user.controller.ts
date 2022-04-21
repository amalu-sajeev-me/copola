import { scream } from "../utils/APIError";
import { existingUser, createUser, encryptPassword } from "../models/user.model";
import { asyncRequestHandler } from "../utils/types";

const createAccount: asyncRequestHandler = async (req, res) => {
    const { body: userData } = req;
    const err = [401, "Username Already Exists", null] as const;
    (await existingUser(userData.username)) && scream(...err);
    userData.password = await encryptPassword(userData);
    const user = await createUser(userData);
    return res.send(user);
};

const accountLogin: asyncRequestHandler = async (req, res) => {
    // 
};


export { createAccount, accountLogin };
