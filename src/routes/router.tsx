import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesUrls } from './routes.type';
import HomeCotroller from '../pages/home/home.controller';
import ResultsLayout from '../pages/results/results.layout';
import RacesResults from '../pages/results/outlets/races-results.outlet';
import DriversResults from '../pages/results/outlets/drivers-results.outlet';
import TeamsResults from '../pages/results/outlets/teams-results.outlet';

const RouterProvider: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesUrls.HOME} element={<HomeCotroller />} />
      <Route path={`${RoutesUrls.RESULTS}/:year?`} element={<ResultsLayout />}>
        <Route index element={<RacesResults />} />
        <Route path="races/:id?" element={<RacesResults />} />
        <Route path="drivers/:id?" element={<DriversResults />} />
        <Route path="teams/:id" element={<TeamsResults />} />
      </Route>
    </Routes>
  );
};

export default RouterProvider;
