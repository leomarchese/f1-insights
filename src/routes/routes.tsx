// src/routes/AppRoutes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesUrls } from './routes.type';
import HomeCotroller from '../pages/home/home.controller';
import ResultsController from '../pages/results/results.controller';
import RacesResults from '../pages/results/outlets/races-results.outlet';
import DriversResults from '../pages/results/outlets/drivers-results.outlet';
import TeamsResults from '../pages/results/outlets/teams-results.outlet';

const RouterProvider: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesUrls.HOME} element={<HomeCotroller />} />
      <Route path={`${RoutesUrls.RESULTS}/:year?`} element={<ResultsController />}>
        <Route path="races" element={<RacesResults />} />
        <Route path="drivers" element={<DriversResults />} />
        <Route path="teams" element={<TeamsResults />} />
      </Route>
    </Routes>
  );
};

export default RouterProvider;
