import { Suspense } from 'react';
import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';

export const Layuot = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
