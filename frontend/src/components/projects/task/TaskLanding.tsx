import React, { useEffect, useState } from "react";
import "./TaskLanding.css";
import { getAllTasks } from "../../../utils/axios";
import { Button } from "@mui/material";
import EditTaskComponent from "../../modals/EditTask";
import CreateTaskComponent from "../../modals/CreateTask/CreateTask";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useParams } from "react-router-dom";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  /* useEffect(() => {
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
  }, [isModalOpen, tasks]); */

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (!searchQuery) {
          if (id) {
            const data = await getAllTasks(id);
            if (data) {
              setProjects(data);
            }
          }
        } else {
          await handleSearch();
        }
      } catch (error) {
        // Manejar errores, por ejemplo, mostrar un mensaje de error.
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isModalOpen, searchQuery]);

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      alert("Tarea borrado con éxito.");

      setIsModalOpen(false);
      const data = await getAllTasks(id);
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

  const handleSearch = async () => {
    const BaseBackendURI = import.meta.env.VITE_BASE_API_URI;
    try {
      const response = await axios.get(`${BaseBackendURI}/tasks`, {
        params: { projectId: id, name: searchQuery },
      });

      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        setProjects(data);
        console.log("Tareas obtenidos con éxito.");
      } else {
        console.log("Error al obtener Tareas.");
      }
    } catch (error) {
      console.log("Error al obtener Tareas. Detalles: " + error);
    }
  };
  const navigateTo = useNavigate();

  function BackToProjects() {
    navigateTo(`/dashboard/`);
  }

  return (
    <>
      <div className="layout">
        <div className="header">
          <div onClick={() => BackToProjects()}>
            <svg
              width="34px"
              height="34px"
              viewBox="0 0 1024 1024"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"
                />

                <path
                  fill="#000000"
                  d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"
                />
              </g>
            </svg>
          </div>
          <h1 className="Htitle">Mis Tareas Pendientes</h1>
        </div>

        <div className="actions">
          <input
            type="text"
            placeholder="Buscar en mis Tareas..."
            className="input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Button variant="outlined" onClick={handleSearch}>
            Buscar
          </Button>

          <Button variant="outlined" onClick={openModal}>
            Create
          </Button>
        </div>
        {/* 
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
          <Loader />
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
