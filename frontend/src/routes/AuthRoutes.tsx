import AuthPage from '../pages/auth';
import AuthPasswordPage from '../pages/auth.password';
import { Routes, Route } from 'react-router-dom'

// Routes for Authentication.
export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthPage />} index />
        <Route path='forgot-password' element={<AuthPasswordPage />} />
      </Routes>
    </>
  )
}
