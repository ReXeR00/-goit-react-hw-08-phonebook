import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        backgroundColor: '#b4d6f5',
        borderRadius: '8px',
        padding: '40px 20px',
        outline: 'auto #291578',
        outlineOffset: '-10px',
        width: '600px',
        minHeight: '400px',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
