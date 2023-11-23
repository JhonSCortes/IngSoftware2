import { Routes, Route } from 'react-router-dom';
import TaskPage from '../pages/tasks/task';

// Task-related routes.
export const TaskRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<TaskPage />} index />
      </Routes>
    </>
  )
}
