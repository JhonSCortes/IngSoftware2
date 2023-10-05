import { prisma } from '../index';
import { User, UserToBeCreated } from 'interfaces/users';

// User Actions
export const getUsers = () => prisma.users.findMany().then((res) => res);
export const getUserById = (id: string) => prisma.users.findUnique({ where: { id } }).then((res) => res);
export const updateUserRecord = (id: string, username: string) => prisma.users.update({ where: { id }, data: { username: username } }).then((res) => res);
export const updateUserSession = (user: User) => prisma.users.update({ where: { id: user.id }, data: { authentication: { update: { sessionToken: user.authentication.sessionToken } } } }).then((res) => res);
export const deleteUserRecord = (id: string) => prisma.users.delete({ where: { id } }).then((res) => res);
export const getUserByEmail = (email: string) => prisma.users.findFirst({ where: { email: email } }).then((res) => res);
export const getUserAuthentication = (email: string) => prisma.users.findFirst({ where: { email: email } }).then((res) => res);
export const createUserRecord = (newUser: UserToBeCreated) => prisma.users.create({ data: { v: 0, email: newUser.email, username: newUser.username, authentication: { salt: newUser.authentication.salt, password: newUser.authentication.password, sessionToken: "" } } }).then((res) => res);
export const getUserBySessionToken = (sessionToken: string) => prisma.users.findFirst({ where: { authentication: { is: { sessionToken: sessionToken } } } }).then((res) => res);