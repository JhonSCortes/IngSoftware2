import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

// User related endpoints.
export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/users/:id', isAuthenticated, updateUser);
};