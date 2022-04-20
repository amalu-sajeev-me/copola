import { Router } from "express";
import { createAccount } from "../controllers/user.controller";
import { catchAsync } from "../utils/catchAsync";

const userRouter = Router();

userRouter.post("/user", catchAsync(createAccount));


export { userRouter };