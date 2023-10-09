import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  getTasksByProjectId,
  updateTaskRecord,
} from "../actions/task";
import express from "express";
import { Task, TaskToBeCreated } from "interfaces/task";

export const createTasktLocal = async (values: TaskToBeCreated) => {
  const task = await createTask(values);
  return task;
};

export const CreateTaskMethod = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, description, state, assignedUsers, projectId, startDate, endDate } = req.body;

    if (!name || !description || !state || !assignedUsers || !projectId) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const Proyect = await createTasktLocal({
      name,
      description,
      state,
      assignedUsers,
      projectId,
      startDate,
      endDate,
    });

    return res.status(200).json(Proyect).end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Se produjo un error interno en el servidor" });
  }
};

export const getAllTask = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getAllTasks();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Se produjo un error interno en el servidor:\n" + error });
  }
};

export const getAllTaskByProject = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const tasks = await getTasksByProjectId(id);

    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Se produjo un error interno en el servidor:\n" + error });
  }
};
export const GetTask = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const task = await getTaskById(id); 

    return res.json(task);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteTaskMethod = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedTask = await deleteTask(id);

    return res.json(deletedTask);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateTaskMethod = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { name, description, state, assignedUsers, projectId, startDate, endDate } = req.body;

    if (!name || !description || !state || !assignedUsers || !projectId) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
  
    const task = await updateTaskRecord(
      id,
      name,
      description,
      state,
      assignedUsers,
      projectId,
      startDate,
      endDate,
    );

    return res.status(200).json(task).end();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Se produjo un error interno en el servidor:\n" + error });
  }
};
