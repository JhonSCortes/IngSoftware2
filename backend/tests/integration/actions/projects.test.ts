jest.mock('../../../src/db', () => ({
  prisma: {
    project: {
      create: jest.fn().mockResolvedValue({
        id: 'some-project-id',
        name: 'Test Project',
        description: 'Test Description',
        ownerId: 'someOwnerId',
        startDate: new Date(),
        endDate: new Date(),
      }),
      findMany: jest.fn().mockResolvedValue([
        {
          id: 'some-project-id',
          name: 'Test Project',
          description: 'Test Description',
          ownerId: 'someOwnerId',
          startDate: new Date(),
          endDate: new Date(),
        }, 
      ]),
      findUnique: jest.fn().mockImplementation(({ where }) => ({
        id: where.id,
        name: 'Test Project',
        description: 'Test Description',
        ownerId: 'someOwnerId',
        startDate: new Date(),
        endDate: new Date(),
        // ...otros campos del proyecto
      })),
      update: jest.fn().mockImplementation(({ data, where }) => ({
        id: where.id,
        ...data,
        // ...datos actualizados del proyecto
      })),
      delete: jest.fn().mockResolvedValue({
        id: 'some-project-id',
        // ...datos del proyecto eliminado
      }),
      deleteMany: jest.fn().mockResolvedValue({ count: 1 }), // Simula la eliminación de proyectos
    },
    $disconnect: jest.fn(),
  },
}));

import { createProject, getProjects, getProjectById, updateProjectRecord, deleteProject } from '../../../src/actions/projects';
import {describe, expect, it, beforeAll, afterEach, afterAll} from "@jest/globals";

describe('Project Actions Integration Tests', () => {
  let projectId: string;

  it('should create a new project', async () => {
    const newProject = {
      name: 'Test Project',
      description: 'Test Description',
      ownerId: 'someOwnerId',
      startDate: new Date(),
      endDate: new Date(),
    };
    const project = await createProject(newProject);
    projectId = project.id;
    expect(project.name).toBe(newProject.name);
  });

  it('should retrieve all projects', async () => {
    const projects = await getProjects();
    expect(projects.length).toBeGreaterThan(0);
  });
  
  it('should retrieve a project by id', async () => {
    const project = await getProjectById(projectId);
    expect(project?.id).toBe(projectId);
  });
});
