import mongoose, { Connection } from "mongoose";

async function connectDatabase(): Promise<Connection> {
    const { DB_STRING } = process.env;
    const { connection } = mongoose;
    const dbMsg = `MongoDB database connection succesfull`;
    if (!DB_STRING) throw new Error("invalid connection url");
    await mongoose.connect(DB_STRING, {keepAlive: true});
    console.log(dbMsg);
    mongoose.connection.on("error", console.error);
    return connection;
}

export { connectDatabase };