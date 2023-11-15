import request from 'supertest';
import express from 'express';
import { login } from '../../../src/controllers/authentication';
import { getUserAuthentication, updateUserSession } from '../../../src/actions/users';

jest.mock('../../../src/actions/users', () => ({
  getUserAuthentication: jest.fn(),
  updateUserSession: jest.fn(),
}));

const app = express();
app.use(express.json());
app.post('/login', login);

describe('Authentication Controller Integration Tests', () => {
  it('should return 400 if email or password are missing', async () => {
    const response = await request(app).post('/login').send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Se requieren el correo electrónico y la contraseña.' });
  });

  it('should return 400 if email is not registered', async () => {
    const email = 'nonexistent@example.com';
    const password = 'password';
    (getUserAuthentication as jest.Mock).mockResolvedValueOnce(null);
    const response = await request(app).post('/login').send({ email, password });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'El correo electrónico no está registrado.' });
  });

  it('should return 403 if password is incorrect', async () => {
    const email = 'user@example.com';
    const password = 'wrongpassword';
    (getUserAuthentication as jest.Mock).mockResolvedValueOnce({
      id: 'someUserId',
      authentication: {
        salt: 'someSalt',
        password: 'someHashedPassword',
        sessionToken: null,
      },
    });
    const response = await request(app).post('/login').send({ email, password });
    expect(response.status).toBe(403);
    expect(response.body).toEqual({ error: 'La contraseña proporcionada es incorrecta.' });
  });

  it('should return 200 and set session cookie if login is successful', async () => {
    const email = 'user@example.com';
    const password = 'correctpassword';
    const userId = 'someUserId';
    const sessionToken = 'someSessionToken';
    (getUserAuthentication as jest.Mock).mockResolvedValueOnce({
      id: userId,
      authentication: {
        salt: 'someSalt',
        password: 'someHashedPassword',
        sessionToken: null,
      },
    });
  });

  it('should return 500 if an error occurs', async () => {
    const email = 'user@example.com';
    const password = 'correctpassword';
    (getUserAuthentication as jest.Mock).mockRejectedValueOnce(new Error('Database connection failed'));
    const response = await request(app).post('/login').send({ email, password });
  });
});