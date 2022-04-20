import { json, urlencoded } from "express";

const jsonParser = json();
const urlParser = urlencoded({ extended: true });

export { urlParser, jsonParser };