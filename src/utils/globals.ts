import { APIError } from "./APIError";

const globalMethods = {
    scream: APIError.scream
};

Object.keys(globalMethods).forEach(method => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global[method] = globalMethods[method];
});