import express from 'express';

import { isAuthenticated, isOwner } from '../middlewares';
import { GetTask, CreateTaskMethod, deleteTaskMethod, getAllTask, updateTaskMethod } from '../controllers/task';

export default (router: express.Router) => {
    router.post('/tasks', CreateTaskMethod);
    router.get('/task',  getAllTask);
    router.get('/tasks/:id',  GetTask);
    router.delete('/tasks/:id',  deleteTaskMethod);
    router.patch('/tasks/:id',  updateTaskMethod);
};