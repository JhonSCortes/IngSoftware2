import { Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/auth';
import AuthPasswordPage from './pages/auth.password';
import './App.css';

// The app function will show and configure all SPA routes.
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Navigate to='auth' />} />
        <Route path='auth'>
          <Route element={ <AuthPage /> } index/>
          <Route path='reset-password' element={ <AuthPasswordPage /> }/>
        </Route>
        <Route path='dashboard' />
      </Routes>
    </>
  )
}

export default App;
