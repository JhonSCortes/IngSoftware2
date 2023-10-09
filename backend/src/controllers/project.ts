import { prisma } from "../index";
import { createProject, deleteProject, getProjectById, getProjects,  updateProjectRecord } from "../actions/projects";
import { ProjectToBeCreated } from "interfaces/projects";
import express from 'express';

export const createprojectLocal = async (values: ProjectToBeCreated) => {
    const user = await createProject(values);
    return user;
  };

export const CreateProjectMethod = async (req: express.Request, res: express.Response) => {
    try {
      const { name, description, ownerId, startDate, endDate } = req.body;
  
      if (!name || !description || !ownerId) {
        return res.status(400).json({ error: 'Faltan datos obligatorios (name, description, ownerId)' });
      }

      const Proyect = await createprojectLocal({
        name,
        description,
        ownerId,
        startDate,
        endDate
      }); 
  
      return res.status(200).json(Proyect).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Se produjo un error interno en el servidor' });
    }
  }
  

  export const getAllProjects = async (req: express.Request, res: express.Response) => {
    try {
      const projects = await getProjects();
  
      return res.status(200).json(projects);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Se produjo un error interno en el servidor:\n' +error });
    }
  };
  
  export const GetProject= async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
  
      const project = await getProjectById(id); 
  
      return res.json(project);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const deleteProjectMethod = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const { id } = req.params;
  
      const deletedProject = await deleteProject(id);
  
      return res.json(deletedProject);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const updateProjectMethod = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const { id } = req.params;
      const { name, description, ownerId, startDate, endDate } = req.body;
  
      if (!name || !description || !ownerId ) {
          return res.status(400).json({ error: "Faltan datos obligatorios" });
      }
    
      const task = await updateProjectRecord(
        id,
        name,
        description,
        ownerId,
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