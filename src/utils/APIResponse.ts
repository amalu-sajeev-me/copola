class APIResponse {
    constructor(public status: boolean, public message: string, public body?: unknown) { }
    static say(status: boolean, message: string, body?: unknown) {
        return new APIResponse(status, message, body);
    }
}

const { say } = APIResponse;

export { APIResponse, say };