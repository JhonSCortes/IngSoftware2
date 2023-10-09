import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

interface CreateProjectComponentProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTaskComponent: React.FC<CreateProjectComponentProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    state: "",
    assignedUsers: "",
    startDate: "",
    endDate: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [state, setState] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

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
      await axios.post('http://localhost:8080/tasks', formData);
      setSuccessMessage("Tarea creado con éxito.");
      // Aquí puedes hacer algo adicional, como cerrar el modal o redirigir a otra página si es necesario.
    } catch (error) {
      setErrorMessage("Error al crear la Tarea.");
    }
  };

  const closeModal = () => {
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
            Crear Tarea
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre Tarea"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <TextField
              label="Descripcion"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleFormChange}
            />
            <InputLabel id="demo-simple-select-label">estado</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-select-small"
              value={state}
              label="estado"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Activa"}>Retrasada</MenuItem>
              <MenuItem value={"Pendiente"}>Pendiente</MenuItem>
              <MenuItem value={"Terminada"}>Terminada</MenuItem>
            </Select>

            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleFormChange}
            />
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleFormChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </form>
          {errorMessage && <div>Error: {errorMessage}</div>}
          {successMessage && <div>Éxito: {successMessage}</div>}
        </Box>
      </Modal>

      <></>
    </>
  );
};

export default CreateTaskComponent;
