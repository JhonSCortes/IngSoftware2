import request from 'supertest';
import express from 'express';
import { updateProjectMethod } from '../../../src/controllers/project';
import { updateProjectRecord } from '../../../src/actions/projects';

jest.mock('../../../src/actions/projects', () => ({
  updateProjectRecord: jest.fn(),
}));

const app = express();
app.use(express.json());
app.put('/projects/:id', updateProjectMethod);

describe('Project Controller Integration Tests', () => {
  it('should return 400 if name, description, or ownerId are missing', async () => {
    const response = await request(app).put('/projects/1').send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Faltan datos obligatorios' });
  });

  it('should return 500 if an error occurs', async () => {
    (updateProjectRecord as jest.Mock).mockRejectedValueOnce(new Error('Database connection failed'));
    const response = await request(app).put('/projects/1').send({
      name: 'Project 1',
      description: 'Description 1',
      ownerId: '1',
    });
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Se produjo un error interno en el servidor:\nError: Database connection failed' });
  });

  it('should return 200 and the updated project if successful', async () => {
    const updatedProject = {
      id: '1',
      name: 'Project 1',
      description: 'Description 1',
      ownerId: '1',
      startDate: '2022-01-01',
      endDate: '2022-01-31',
    };
    (updateProjectRecord as jest.Mock).mockResolvedValueOnce(updatedProject);
    const response = await request(app).put('/projects/1').send(updatedProject);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedProject);
  });
});