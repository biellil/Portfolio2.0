import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { repo } from '../pages/Repo';

export const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/repo' element={<repo />} />
    </Routes>
  );
};
