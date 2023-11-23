import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';

// Dashboard related routes.
export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DashboardPage />} index />
      </Routes>
    </>
  )
}
