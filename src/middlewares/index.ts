import { jsonParser, urlParser } from "./body-parser";
import { errorHandler } from "./errorHandler";
import { logger } from "./morgan";
import { passport } from "../auth/passport";
const middlewares = [jsonParser, urlParser, logger, passport.initialize()];

export { middlewares, errorHandler };
