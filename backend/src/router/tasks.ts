import express from 'express';

import { isAuthenticated, isOwner } from '../middlewares';
import { GetTask, CreateTaskMethod, deleteTaskMethod, getAllTask, updateTaskMethod } from '../controllers/task';

export default (router: express.Router) => {
    router.post('/tasks',isAuthenticated, CreateTaskMethod);
    router.get('/task', isAuthenticated, getAllTask);
    router.get('/tasks/:id', isAuthenticated, GetTask);
    router.delete('/tasks/:id', isAuthenticated, deleteTaskMethod);
    router.patch('/tasks/:id', isAuthenticated, updateTaskMethod);
};