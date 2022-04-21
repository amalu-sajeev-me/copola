import { Router } from "express";
import { validateUser } from "../middlewares/body-validator";
import { createAccount } from "../controllers/user.controller";
import { catchAsync } from "../utils/catchAsync";

const userRouter = Router();

userRouter.post("/user", validateUser, catchAsync(createAccount));


export { userRouter };