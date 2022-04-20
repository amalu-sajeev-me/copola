import { createUser } from "../models/user.model";
import { asyncRequestHandler } from "../utils/types";

const createAccount: asyncRequestHandler = async (req, res) => {
    const { body: userData } = req;
    const user = await createUser(userData);
    return res.send(user);
};



export { createAccount };