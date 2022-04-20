import "dotenv/config";
import { app } from "../app";
import { startServer } from "../services/server";

startServer(app);