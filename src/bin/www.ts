import "dotenv/config";
import { app } from "../app";
import { startServer } from "../services/server";
import { connectDatabase } from "../services/mongo";

(async function startServices() {
    await connectDatabase();
    startServer(app);
})();