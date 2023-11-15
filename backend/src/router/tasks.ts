import express from 'express';

import { isAuthenticated, isOwner } from '../middlewares';
import { GetTask, CreateTaskMethod, deleteTaskMethod, getAllTask, updateTaskMethod, getAllTaskByProject, getAllTasksByname } from '../controllers/task';

export default (router: express.Router) => {
    router.post('/tasks', CreateTaskMethod);
    router.get('/task',  getAllTask);
    router.get('/tasks/:id',  GetTask);
    router.get('/tasks/',  getAllTasksByname);
    router.get('/project/tasks/:id',  getAllTaskByProject);
    router.delete('/tasks/:id',  deleteTaskMethod);
    router.patch('/tasks/:id',  updateTaskMethod);
};