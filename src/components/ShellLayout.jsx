
import React from 'react';
import NavigationBar from './NavigationBar';
import SideNavigationBar from './SideNavigationBar';
import { Outlet, useLocation } from 'react-router-dom';
import './ShallLayout.css'; 


const ShellLayout = () => {
  const location = useLocation();

  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="shell-layout">
      <NavigationBar />
      <div className="content-container">
        <div className="side-nav-container">
          {isDashboard && <SideNavigationBar />}
        </div>
        <div className={`dashboard-content ${isDashboard ? 'with-side-nav' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ShellLayout;
