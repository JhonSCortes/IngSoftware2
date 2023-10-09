import React, { useEffect, useState } from "react";
import "./TaskLanding.css";
import { getAllTasks } from "../../../utils/axios";
import { Alert, Button } from "@mui/material";
import EditTaskComponent from "../../modals/EditTask";
import CreateTaskComponent from "../../modals/CreateTask/CreateTask";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const TaskLandingComponent: React.FC = () => {
  const [tasks, setProjects] = useState<Task[]>([]);
  const [taskInfo, setTaskInfo] = useState({
    id: "",
    name: "",
    description: "",
    state: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const [projectId, setProjectId] = useState("651f49213ae83530883aa56b");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await getAllTasks(id);
        if (data) {
          setProjects(data);
        }
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
      const data = await getAllTasks(projectId);
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
        </div>{/* 
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="project-list">
            {tasks.map((task) => (
              <div className="taskContainer" key={task.id}>
                <div className="cardTask">
                  <div
                    className={
                      task.state.toLocaleLowerCase() === "pendiente"
                        ? "retrasada"
                        : task.state === "terminada"
                        ? "terminada"
                        : "headerCard"
                    }
                  >
                    {" "}
                    <center>
                      <p>{task.state.toLocaleUpperCase()}</p>
                    </center>
                  </div>
                  <div className="info">
                    <p className="title">{task.name}</p>
                    <p className="TaskDesc">{task.description}</p>
                    <br></br>
                    <p className="dates">
                      Inicio: {new Date(task.startDate).toLocaleDateString()}{" "}
                      Fin: {new Date(task.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="footer">
                    <p className="tag">{task.state.toLocaleLowerCase()}</p>

                    <Button
                      onClick={() => {
                        setTaskInfo({
                          id: task.id,
                          name: task.name,
                          description: task.description,
                          state: task.state,
                        });
                        openModal();
                      }}
                      variant="contained"
                    >
                      Editar
                    </Button>

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
      {taskInfo.name ? (
        <EditTaskComponent
          ProjectId={id ?? ""}
          Task={taskInfo}
          setTask={setTaskInfo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <CreateTaskComponent
          ProjectId={id ?? ""}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default TaskLandingComponent;
