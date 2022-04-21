import { jsonParser, urlParser } from "./body-parser";
import { errorHandler } from "./errorHandler";
import { logger } from "./morgan";

const middlewares = [jsonParser, urlParser, logger];

export { middlewares, errorHandler };