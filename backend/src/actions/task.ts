import { prisma } from "../db";
import { Task, TaskToBeCreated } from "interfaces/task";

// Acción para obtener todas las tareas de un proyecto
export const getTasksByProjectId = (projectId: string) =>
  prisma.task.findMany({ where: { projectId } });

// Acción para obtener todas las tareas
export const getAllTasks = () => prisma.task.findMany();

// Acción para obtener una tarea por su ID
export const getTaskById = (id: string) =>
  prisma.task.findUnique({ where: { id } });

// Acción para crear una nueva tarea
export const createTask = (newTask: TaskToBeCreated) =>
  prisma.task.create({ data: newTask });

// Acción para actualizar una tarea por su ID
export const updateTaskRecord = (
  id: string,
  name: string,
  description: string,
  state: string,
  assignedUsers: string[],
  projectId: string,
  startDate: Date,
  endDate: Date
) =>
  prisma.task.update({
    where: { id },
    data: {
      name: name,
      description: description,
      state: state,
      assignedUsers: assignedUsers,
      projectId: projectId,
      startDate: startDate,
      endDate: endDate,
    },
  });

// Acción para eliminar una tarea por su ID
export const deleteTask = (id: string) => prisma.task.delete({ where: { id } });

// Acción para obtener todas las tareas de un usuario por su ID de usuario
export const getAllTasksByUserId = (userId: string) =>
  prisma.task.findMany({ where: { project: { ownerId: userId } } });

// Acción para obtener todas las tareas de un usuario por su ID de usuario y estado
export const getTasksByUserIdAndState = (userId: string, state: string) =>
  prisma.task.findMany({
    where: {
      project: {
        ownerId: userId,
      },
      state: state,
    },
  });

// Action para encontrar las tareas asignadas a uno o más usuarios
export const getTasksByAssignedUsers = async (userIds: string[]) => {
  const tasks = await prisma.task.findMany({
    where: {
      assignedUsers: {
        // Comprobamos que al menos uno de los usuarios esté asignado a la tarea
        hasSome: userIds,
      },
    },
  });
  return tasks;
};
