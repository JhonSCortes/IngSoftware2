import express from 'express';

import { isAuthenticated, isOwner } from '../middlewares';
import { CreateProjectMethod, GetProject, deleteProjectMethod, getAllProjects, updateProjectMethod } from '../controllers/project';

export default (router: express.Router) => {
    router.post('/project',isAuthenticated, CreateProjectMethod);
    router.get('/project', isAuthenticated, getAllProjects);    
    router.get('/project/:id', isAuthenticated, GetProject);
    router.patch('/project/:id', isAuthenticated, updateProjectMethod);
    router.delete('/project/:id', isAuthenticated, deleteProjectMethod);
};