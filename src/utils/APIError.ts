class APIError extends Error {
    constructor(public statusCode: number, public message: string, public err: unknown = {}) {
        super(message);
    }

    static scream(statusCode: number, message: string, err?: unknown) {
        throw new APIError(statusCode, message, err);
    }
}
const { scream } = APIError;
export { APIError, scream };