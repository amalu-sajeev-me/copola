import { IStrategyOptions, VerifyFunction, Strategy } from "passport-local";
import bcrypt from "bcrypt";
import { User } from "../models/schemas/user.schema";

const StrategyOpts: IStrategyOptions = {
    session: false
};

const verify: VerifyFunction = async (username, password, done) => {
    try {
        const user = await User.findOne({ username });
        if (!user) return done(null, false);
        const validUser = await bcrypt.compare(password, user.password);
        if (!validUser) return done(null, false);
        return done(null, user);
    } catch (err) {
        if (err) return done(err);
    }
};

const localStrategy = new Strategy(StrategyOpts, verify);

export { localStrategy };