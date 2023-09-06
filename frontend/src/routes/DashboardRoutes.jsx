import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';

export const DashboardRoutes = () => {
  return (
    <>
        <Routes>
            <Route element={ <DashboardPage /> } index/>
        </Routes>
    </>
  )
}
