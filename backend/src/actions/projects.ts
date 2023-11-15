import { prisma } from "../db";
import { Project, ProjectToBeCreated } from "interfaces/projects";
// Acción para obtener todos los proyectos
export const getProjects = () =>
  prisma.project.findMany({
    include: {
      owner: true,
      tasks: true,
    },
  });

// Acción para obtener un proyecto por su ID
export const getProjectById = (id: string) =>
  prisma.project.findUnique({
    where: { id },
    include: {
      owner: true,
      tasks: true,
    },
  });

// Acción para crear un nuevo proyecto
export const createProject = (newProject: ProjectToBeCreated) =>
  prisma.project.create({ data: newProject });

// Acción para actualizar un proyecto por su ID
export const updateProjectRecord = (
  id: string,
  name: string,
  description: string,
  ownerId: string,
  startDate: Date,
  endDate: Date
) =>
  prisma.project.update({
    where: { id },
    data: {
      name: name,
      description: description,
      ownerId: ownerId,
      startDate: startDate,
      endDate: endDate,
    },
  });

// Acción para eliminar un proyecto por su ID
export const deleteProject = (id: string) =>
  prisma.project.delete({ where: { id } });

// Acción para obtener todos los proyectos de un usuario por su ID de usuario
export const getAllProjectsByUserId = (userId: string) =>
  prisma.project.findMany({ where: { ownerId: userId } });

export const getAllProjectsByName = (name: string) =>
  prisma.project.findMany({ where: { name: { contains: name } } });
