import { AuthRoutes } from './routes/AuthRoutes';
import { DashboardRoutes } from './routes/DashboardRoutes';
import { Route, Routes, Navigate } from 'react-router-dom';
import DeniedModal from './components/modals/DeniedModal';
import PrivateRoutes from './components/auth/PrivateRoutes';
import './App.css';

// The app function will show and configure all SPA routes.
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Navigate to='auth' />} />
        <Route path='auth/*' element= { <AuthRoutes />} />
        <Route path='dashboard/*' element={
          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>
        } />
        <Route path='/*' element={ <DeniedModal errorText='Error 404: Page not found...' /> } />
      </Routes>
    </>
  )
}

export default App;

