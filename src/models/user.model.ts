import { User } from "./schemas/user.schema";
import bcrypt from "bcrypt";

async function existingUser(username: string): Promise<boolean>{
    return !!(await User.exists({ username }));
} 


async function createUser(userData: object) {
    const user = new User(userData);
    console.log(await user.validate());
    await user.save();
    return user;
}

async function encryptPassword({ password }: { password:string }) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

export { existingUser, createUser, encryptPassword };