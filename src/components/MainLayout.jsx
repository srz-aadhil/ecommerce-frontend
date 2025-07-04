// src/components/MainLayout.jsx
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>  {/* Push content below sticky navbar */}
        <Outlet /> {/* Renders current route's component */}
      </main>
    </>
  );
}
