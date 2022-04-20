import { User } from "./schemas/user.schema";

async function createUser(userData: object) {
    const user = new User(userData);
    try {
        await user.save();
        return user;
    } catch (err: unknown) {
        console.log(err);
    }
}

export { createUser };