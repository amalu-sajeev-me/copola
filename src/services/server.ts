import http, {Server} from "http";
import { Express } from "express";

function startServer(handler: Express): Server {
    const { PORT } = process.env;
    const serverMsg = `server started listening to http://localhost:${PORT}`;
    const server = http.createServer(handler);
    server.listen(PORT);
    server.on("listening", () => console.log(serverMsg));
    server.on("error", () => process.exit());
    return server;
}



export { startServer };