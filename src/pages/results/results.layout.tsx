import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../../components/main-layout.component';

const ResultsLayout: React.FC = () => {
  return (
    <MainLayout backgroundColor="bg-[#f6f4f0]">
      <div className="grid gap-5">
        <div className="h-[90px]"></div>
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </MainLayout>
  );
};

export default ResultsLayout;
