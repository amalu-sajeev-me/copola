import { json, urlencoded } from "express";

const jsonParser = json({ strict: true });
const urlParser = urlencoded({ extended: true });

export { urlParser, jsonParser };