import { Router } from "express";
import { validateUser } from "../middlewares/body-validator";
import { createAccount, accountLogin } from "../controllers/user.controller";
import { catchAsync } from "../utils/catchAsync";
import { passport } from "../auth/passport";

const userRouter = Router();

userRouter.post("/user", validateUser, catchAsync(createAccount));

userRouter.post("/user/auth", passport.authenticate("local", {session: false}), accountLogin);

export { userRouter };