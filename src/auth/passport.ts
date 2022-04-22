import passport from "passport";
import { localStrategy } from "./local-strategy";

passport.use(localStrategy);



export { passport };
