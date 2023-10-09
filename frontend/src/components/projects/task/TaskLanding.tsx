import React, { useEffect, useState } from "react";
import "./TaskLanding.css";
import { getAllTasks } from "../../../utils/axios";
import { Button } from "@mui/material";
import EditTaskComponent from "../../modals/EditTask";
import CreateTaskComponent from "../../modals/CreateTask/CreateTask";
import axios from "axios";

const TaskLandingComponent: React.FC = () => {
  const [tasks, setProjects] = useState<Task[]>([]);
  const [taskInfo, setTaskInfo] = useState({id: "", name: "", description: "", state: "" });
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTasks();
      if (data) {
        setProjects(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [isModalOpen, tasks]);

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      alert("Tarea borrado con éxito.");

      setIsModalOpen(false);
      const data = await getAllTasks();
      if (data) {
        setProjects(data);
      }
    } catch (error) {
      alert("Error al borrar la Tarea.");
    }
  };

  interface Task {
    id: string;
    name: string;
    description: string;
    assignedUsers: string[];
    state: string;
    startDate: Date;
    endDate: Date;
  }

  return (
    <>
      <div className="layout">
        <div className="header">
          <h1 className="Htitle">Mis Tareas Pendientes</h1>
        </div>

        <div className="actions">
          <input
            type="text"
            placeholder="Buscar en tus Tareas..."
            className="input"
          />
          <Button variant="outlined" onClick={openModal}>
            Create
          </Button>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="project-list">
            {tasks.map((task) => (
              <div className="taskContainer" key={task.id}>
                <div className="cardTask">
                  <div
                    className={
                      task.state === "pendiente"
                        ? "retrasada"
                        : task.state === "terminada"
                          ? "terminada"
                          : "headerCard"
                    }
                  />
                  <div className="info">
                    <p className="title">{task.name}</p>
                    <p>{task.description}</p>
                    <br></br>
                    <p className="recent">
                      Inicio: {new Date(task.startDate).toLocaleDateString()}{" "}
                      Fin: {new Date(task.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="footer">
                    <p className="tag">{task.state}</p>

                    <Button onClick={() => { setTaskInfo({id: task.id, name: task.name, description: task.description, state: task.state }); openModal() }} variant="contained">Editar</Button>

                    
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Renderiza el componente del modal con la variable isModalOpen */}
      {taskInfo.name ? <EditTaskComponent Task={taskInfo} setTask={setTaskInfo} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> : <CreateTaskComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
      />}
    </>
  );
};

export default TaskLandingComponent;
