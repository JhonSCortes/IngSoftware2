import axios from "axios";
import { ProjectPayload, TaskPayload, loginPayload, registerPayload } from "../interfaces/utils";

const BaseBackendURI = import.meta.env.VITE_BASE_API_URI;

const sendRegisterForm = async (payload: registerPayload) => {
  try {
    const res = await axios.post(BaseBackendURI + "/auth/register", {
      email: payload.email,
      password: payload.password,
      username: payload.name,
    });
    return res.data;
  } catch (_) {
    return null;
  }
};

const sendLoginForm = async (payload: loginPayload): Promise<string | null> => {
  try {
    const res = await axios.post(BaseBackendURI + "/auth/login", {
      email: payload.email,
      password: payload.password,
    });
    return res.data.authentication.sessionToken;
  } catch (_) {
    return null;
  }
};

// Create a new project
const createProject = async (payload: ProjectPayload): Promise<string | null> => {
  try {
    const res = await axios.post(BaseBackendURI + "/auth/project", {
      name: payload.name,
      description: payload.description,
      ownerId: payload.ownerId,
      startDate: payload.startDate,
      endDate: payload.endDate,
    });
    return res.data;
  } catch (_) {
    return null;
  }
};

// Get all projects (authentication required)
const getAllProjects = async () => {
  try {
    const res = await axios.get(`${BaseBackendURI}/project`);
    return res.data;
  } catch (_) {
    return null;
  }
};

// Get one project by ID (authentication required)
const getProjectById = async (projectId: string) => {
  try {
    const res = await axios.get(`${BaseBackendURI}/project/${projectId}`);
    return res.data;
  } catch (_) {
    return null;
  }
};

/* // Update a project by ID (authentication required)
  const updateProject = async (projectId: string, projectData: any) => {
    try {
      const res = await axios.put(`${BaseBackendURI}/project/${projectId}`, projectData);
      return res.data;
    } catch (_) {
      return null;
    }
  } */

// Get all projects (authentication required)
const getAllTasks = async (id: string) => {
  try {
    const res = await axios.get(`${BaseBackendURI}/project/tasks/${id}`);
    return res.data;
  } catch (_) {
    return null;
  }
};

// Create a new project
const createTask = async (payload: TaskPayload): Promise<string | null> => {
  try {
    const res = await axios.post(BaseBackendURI + "/auth/tasks", {
      name: payload.name,
      description: payload.description,
      state: payload.state,
      startDate: payload.startDate,
      endDate: payload.endDate,
    });
    return res.data;
  } catch (_) {
    return null;
  }
};


export {
  sendRegisterForm,
  sendLoginForm,
  getAllProjects,
  createProject,
  getProjectById,
  getAllTasks,
  createTask,
};
