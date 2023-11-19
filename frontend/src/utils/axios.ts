import axios from "axios";
import { ProjectPayload, TaskPayload, loginPayload, registerPayload } from "../interfaces/utils";

const BaseBackendURI = import.meta.env.VITE_BASE_API_URI;

// Function to send a register form.
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

// Function to send a login form.
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

// Get Projects by name
const projectsByName = async (payload: ProjectPayload): Promise<string | null> => {
  try {
    const res = await axios.post(BaseBackendURI + "/projects", {
      name: payload.name,
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
  projectsByName,
};
