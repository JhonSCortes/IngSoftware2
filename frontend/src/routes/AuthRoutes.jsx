import React from 'react';
import AuthPage from '../pages/auth';
import AuthPasswordPage from '../pages/auth.password';
import { Routes, Route } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <>
        <Routes>
            <Route element={ <AuthPage /> } index/>
            <Route path='forgot-password' element={ <AuthPasswordPage /> }/>
        </Routes>
    </>
  )
}
