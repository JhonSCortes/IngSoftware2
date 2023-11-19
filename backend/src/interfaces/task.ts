// Interfaz para una tarea
interface Task {
  id: string;
  name: string;
  description?: string;
  state: string;
  assignedUsers: string[];
  projectId: string; // ID del proyecto al que pertenece la tarea    
  startDate: Date;
  endDate: Date;
}

// Interfaz para crear una nueva tarea
interface TaskToBeCreated {
  name: string;
  description?: string;
  state: string;
  assignedUsers: string[];
  projectId: string; // ID del proyecto al que pertenece la tarea
  startDate: Date;
  endDate: Date;
}

export type { Task, TaskToBeCreated }