import { Routes, Route } from 'react-router-dom';
import ProjectPage from '../pages/projects';

export const ProjectsRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<ProjectPage />} index />
      </Routes>
    </>
  )
}
