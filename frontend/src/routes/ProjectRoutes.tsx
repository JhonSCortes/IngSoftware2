import { Routes, Route } from 'react-router-dom';
import ProjectPage from '../pages/projects';

// Project related routes
export const ProjectsRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<ProjectPage />} index />
      </Routes>
    </>
  )
}
