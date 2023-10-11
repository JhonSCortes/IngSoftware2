import React, { useEffect, useState } from "react";
import "./Landing.css";
import { getAllProjects } from "../../../utils/axios";
import { Button } from "@mui/material";
import axios from "axios";
import CreateProjectComponent from "../../modals/CreateProject";
import EditProjectComponent from "../../modals/EditProject";
import { Project } from "../../../interfaces/components";
import { useNavigate } from "react-router-dom";

const LandingComponent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectInfo, setProjectInfo] = useState({
    id: "",
    name: "",
    description: "",
    startDate: new Date("2020-09-12"),
    endDate: new Date("2020-09-12"),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const deleteProject = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/project/${id}`);
      alert("Proyecto borrado con éxito.");

      setIsModalOpen(false);
      const data = await getAllProjects();
      if (data) {
        setProjects(data);
      }
    } catch (error) {
      alert("Error al borrar el proyecto.");
    }
  };
  const navigateTo = useNavigate();

  function moveToLogin() {
    navigateTo("/tasks");
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProjects();
      if (data) {
        setProjects(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [isModalOpen, projects]);

  return (
    <>
      <div className="layout">
        <div className="header">
          <h1 className="Htitle">Mis Proyectos</h1>
        </div>

        <div className="actions">
          <input
            type="text"
            placeholder="Buscar en tus Proyectos..."
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
            {projects.map((project) => (
              <div className="card work" key={project.id}>
                <div className="img-section">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={77}
                    width={76}
                  >
                    <path
                      fillRule="nonzero"
                      fill="#3F9CBB"
                      d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"
                    />
                  </svg>{" "}
                </div>
                <div className="card-desc">
                  <div className="card-header">
                    <div className="card-title">{project.name}</div>
                    <div className="card-menu">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                  <div className="card-time">{project.description}</div>
                  <p className="recent">
                    Inicio: {new Date(project.startDate).toLocaleDateString()}{" "}
                    Fin: {new Date(project.startDate).toLocaleDateString()}
                  </p>
                  <div>
                    <Button
                      color="warning"
                      variant="contained"
                      onClick={() => {
                        setProjectInfo({
                          id: project.id,
                          name: project.name,
                          description: project.description,
                          startDate: project.startDate,
                          endDate: project.endDate,
                        });
                        openModal();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => deleteProject(project.id)}
                    >
                      Delete
                    </Button>
                  </div>
                  <Button variant="contained" onClick={() => moveToLogin()}>
                    Ir a las Tareas
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {projectInfo.name ? (
        <EditProjectComponent
          setProjectInfo={setProjectInfo}
          Project={projectInfo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <CreateProjectComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default LandingComponent;
