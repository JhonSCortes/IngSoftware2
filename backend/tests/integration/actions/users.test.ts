import { prisma } from "../../../src/db";
import { createUserRecord } from "../../../src/actions/users";
import { UserToBeCreated } from "../../../src/interfaces/users";
import {describe, expect, it, beforeAll, afterAll} from "@jest/globals";

describe("User actions", () => {
  beforeAll(async () => {
    // Connect to the test database
    await prisma.$connect();
  });

  afterAll(async () => {
    // Disconnect from the test database
    await prisma.$disconnect();
  });

  describe("createUserRecord", () => {
    it("should create a new user", async () => {
      const newUser: UserToBeCreated = {
        email: "test@example.com",
        username: "testuser",
        authentication: {
          salt: "testsalt",
          password: "testpassword",
        },
      };

      const createdUser = await createUserRecord(newUser);

      expect(createdUser).toHaveProperty("id");
      expect(createdUser.email).toBe(newUser.email);
      expect(createdUser.username).toBe(newUser.username);
      expect(createdUser.authentication.salt).toBe(newUser.authentication.salt);
      expect(createdUser.authentication.password).toBe(newUser.authentication.password);
    });
  });
});