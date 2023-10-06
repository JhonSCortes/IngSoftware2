import express from 'express';
import authentication from './authentication';
import users from './users';
import tasks from './tasks';
import project from './project';

const router = express.Router();

export default (): express.Router =>{
    tasks(router);
    authentication(router);
    users(router);
    project(router);
    return router;
}