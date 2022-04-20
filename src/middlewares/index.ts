import { jsonParser, urlParser } from "./body-parser";
import { errorHandler } from "./errorHandler";

const middlewares = [jsonParser, urlParser];

export { middlewares, errorHandler };