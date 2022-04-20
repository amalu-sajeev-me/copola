import express from "express";
import { errorHandler, middlewares } from "./middlewares";
import { defaultRoute } from "./routers/default.router";
import { userRouter } from "./routers";

const app = express();

app.use(middlewares);

app.use("/api", userRouter);




app.use(defaultRoute);

app.use(errorHandler);
export { app };