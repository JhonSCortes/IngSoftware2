// Interfaz para un proyecto
interface Project {
    id: string;
    name: string;
    description: string;
    ownerId: string; // ID del propietario (usuario) del proyecto    
    startDate: Date;
    endDate: Date;
  }
  
  // Interfaz para crear un nuevo proyecto
  interface ProjectToBeCreated {
    name: string;
    description: string;
    ownerId: string; // ID del propietario (usuario) del proyecto    
    startDate: Date;
    endDate: Date;
  }

  
export type { Project, ProjectToBeCreated }