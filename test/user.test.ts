// import { expect } from "chai";
import { expect } from "chai";
import request from "supertest";
import { app } from "../src/app";

// const request = supertest(app);

describe("API tests for user routes", () => {
    it("tests the server", () => {
        request(app).get("/").expect(404);
    });

    it("creates a new user", () => {
        const userData = { username: "janeDoee", password: "anything" };
        request(app).post("/api/user").send(userData)
            .then(response => {
                expect(response.status).equal("ok");
            });
    });
});