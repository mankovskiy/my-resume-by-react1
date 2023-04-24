import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
