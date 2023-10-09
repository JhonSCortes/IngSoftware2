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
import { Task } from "../../../interfaces/components";

interface EditTaskComponentProps {
    Task: Task;
    setTask: React.Dispatch<React.SetStateAction<Task>>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTaskComponent: React.FC<EditTaskComponentProps> = ({
    isModalOpen,
    setIsModalOpen,
    Task,
    setTask
}) => {
    const [formData, setFormData] = useState({
        ...Task,
        assignedUsers: ["myself"],
        startDate: new Date("08/10/2023"),
        endDate: new Date("08/14/2023"),
        projectId: "651f49213ae83530883aa56b",
    });
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
            await axios.patch(`http://localhost:8080/tasks/${Task.id}`, formData);
            alert("Tarea Acutlizada con éxito.");
            // Aquí puedes hacer algo adicional, como cerrar el modal o redirigir a otra página si es necesario.
        } catch (error) {
            alert("Error al Acutlizada la Tarea.");
        }
    };

    const closeModal = () => {
        setTask({ id: "", name: "", description: "", state: "" });
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
                        Editar Tarea
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
                        </Select>{/* 
                        <TextField
                            label="Project ID"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="projectId"
                            value={formData.projectId}
                            onChange={handleFormChange}
                        /> */}
                        <br></br>
                        <Button variant="contained" color="primary" type="submit">
                            Save
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default EditTaskComponent;