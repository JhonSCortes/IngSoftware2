import { Routes, Route } from 'react-router-dom';
import TaskPage from '../pages/tasks/task';

export const TaskRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<TaskPage />} index />
      </Routes>
    </>
  )
}
