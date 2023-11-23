import { prisma } from "../db";
import { User, UserToBeCreated } from "interfaces/users";

// User Actions
export const getUsers = () => prisma.users.findMany();

// Returns an user waiting for it's id.
export const getUserById = (id: string) =>
    prisma.users.findUnique({ where: { id } });

// Updates an user's username using it's id.
export const updateUserRecord = (id: string, username: string) =>
    prisma.users.update({ where: { id }, data: { username: username } });

// Updates an user session.
export const updateUserSession = (user: User) =>
    prisma.users.update({
        where: { id: user.id },
        data: {
            authentication: {
                update: { sessionToken: user.authentication.sessionToken },
            },
        },
    });

// Deletes an user record using it's id.
export const deleteUserRecord = (id: string) =>
    prisma.users.delete({ where: { id } });

// Returns an user record searching for it's email.
export const getUserByEmail = (email: string) =>
    prisma.users.findFirst({ where: { email: email } });

// Return an user mainly user for it's authentication.
export const getUserAuthentication = (email: string) =>
    prisma.users.findFirst({ where: { email: email } });

// Creates a new user record.
export const createUserRecord = (newUser: UserToBeCreated) =>
    prisma.users.create({
        data: {
            v: 0,
            email: newUser.email,
            username: newUser.username,
            authentication: {
                salt: newUser.authentication.salt,
                password: newUser.authentication.password,
                sessionToken: "",
            },
        },
    });

// Returns an user searching with a session token.
export const getUserBySessionToken = (sessionToken: string) =>
    prisma.users.findFirst({
        where: { authentication: { is: { sessionToken: sessionToken } } },
    });
