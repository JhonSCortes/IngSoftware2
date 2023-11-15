import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Project } from "../../../interfaces/components";
import axios from "axios";
import React, { useState } from "react";
import { getAllProjects } from "../../../utils/axios";

interface CreateProjectComponentProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Project: Project;
  setProjectInfo: React.Dispatch<React.SetStateAction<Project>>;
}

const CreateProjectComponent: React.FC<CreateProjectComponentProps> = ({
  isModalOpen,
  setIsModalOpen,
  Project,
  setProjectInfo,
}) => {
  const [formData, setFormData] = useState({ ...Project, ownerId: "651f483e2afedc3b83cf39a6" });

  const [, setProjects] = useState<Project[]>([]);
  
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {      
      const BaseBackendURI = import.meta.env.VITE_BASE_API_URI;
      await axios.patch(
        `${BaseBackendURI}/project/${formData.id}`,
        formData
      );
      alert("Proyecto guardado con éxito.");

      setIsModalOpen(false);
      const data = await getAllProjects();
      if (data) {
        console.log(data);
        setProjects(data);
      }
    } catch (error) {
      alert("Error al guardar el proyecto.");
    }
  };

  const closeModal = () => {
    setProjectInfo({
      id: "",
      name: "",
      description: "",
      startDate: new Date("2020-09-12"),
      endDate: new Date("2020-09-12"),
    });
    setIsModalOpen(false);
  };

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crear Proyecto
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Project Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleFormChange}
            />
            <TextField
              label="Start Date"
              variant="outlined"
              fullWidth
              margin="normal"
              name="startdate"
              value={new Date(formData.startDate).toLocaleDateString()}
              onChange={handleFormChange}
            />
            <TextField
              label="End Date"
              variant="outlined"
              fullWidth
              margin="normal"
              name="enddate"
              value={new Date(formData.endDate).toLocaleDateString()}
              onChange={handleFormChange}
            />
            {/* <TextField
              label="Owner ID"
              variant="outlined"
              fullWidth
              margin="normal"
              name="ownerId"
              value={formData.ownerId}
              onChange={handleFormChange}
            /> */}
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </form>
        </Box>
      </Modal>

      <></>
    </>
  );
};

export default CreateProjectComponent;
