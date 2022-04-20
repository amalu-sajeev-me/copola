import express from "express";
import { errorHandler, middlewares } from "./middlewares";
import { defaultRoute } from "./routers/default.router";

const app = express();

app.use(middlewares);

app.use(defaultRoute);

app.use(errorHandler);
export { app };