// MainLayout.tsx
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const MainLayout = ({ children, backgroundColor }: MainLayoutProps) => {
  return (
    <main className={`${backgroundColor} min-h-[--max-view-height]`}>
      <div className="container mx-auto p-2 md:px-4 md:py-10">{children}</div>
    </main>
  );
};

export default MainLayout;
