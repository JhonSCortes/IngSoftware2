import request from 'supertest';
import express from 'express';
import { isAuthenticated } from '../../../src/middlewares';
import { getUserBySessionToken } from '../../../src/actions/users';
import {jest, describe, expect, it} from "@jest/globals";

jest.mock('../../../src/actions/users', () => ({
  getUserBySessionToken: jest.fn(),
}));

const app = express();
app.use(express.json());
app.use(isAuthenticated);
app.get('/test', (req, res) => {
  res.json({ message: 'Authenticated!' });
});

describe('Auth Middleware Integration Tests', () => {
  it('should return 403 if session token is missing', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(403);
    expect(response.body).toEqual({ error: 'Acceso no autorizado. Debe iniciar sesión.' });
  });

  it('should return 403 if session token is invalid', async () => {
    const response = await request(app).get('/test').set('Cookie', 'LOGGED-AUTH=invalid-token');
    expect(response.status).toBe(403);
    expect(response.body).toEqual({ error: 'La sesión ha caducado o es inválida. Inicie sesión nuevamente.' });
  });

  it('should set the identity property on the request object and call next if session token is valid', async () => {
    const existingUser = { id: '1', name: 'John Doe' };
    const response = await request(app).get('/test').set('Cookie', 'LOGGED-AUTH=valid-token');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Authenticated!' });
  });

  it('should return 500 if an error occurs', async () => {
    const response = await request(app).get('/test').set('Cookie', 'LOGGED-AUTH=valid-token');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Se produjo un error interno en el servidor: \nError: Database connection failed' });
  });
});