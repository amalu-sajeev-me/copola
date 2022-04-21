import { User } from "./schemas/user.schema";

async function existingUser(username: string): Promise<boolean>{
    const user = await User.exists({ username });

    return !!user;
} 


async function createUser(userData: object) {
    const user = new User(userData);
    console.log(await user.validate());
    await user.save();
    return user;
}


export { existingUser, createUser };