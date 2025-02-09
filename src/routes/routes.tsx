// src/routes/AppRoutes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeCotroller from '../pages/home/home.controller';

const RouterProvider: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeCotroller />} />
    </Routes>
  );
};

export default RouterProvider;
