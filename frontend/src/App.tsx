import { AuthRoutes } from './routes/AuthRoutes';
import { Route, Routes, Navigate } from 'react-router-dom';
import DeniedModal from './components/modals/DeniedModal';
import PrivateRoutes from './components/auth/PrivateRoutes';
import './App.css';
import { ProjectsRoutes } from './routes/ProjectRoutes';

// The app function will show and configure all SPA routes.
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Navigate to='auth' />} />
        <Route path='auth/*' element= { <AuthRoutes />} />
        <Route path='dashboard/*' element={
          <PrivateRoutes>
            <ProjectsRoutes />
          </PrivateRoutes>
        } />
        <Route path='/*' element={ <DeniedModal errorText='Error 404: Page not found...' /> } />
      </Routes>
    </>
  )
}

export default App;

