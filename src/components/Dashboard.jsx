import React, {  useState } from 'react';
import './Dashboard.css';
import SideNavigationBar from './SideNavigationBar';
import SystemSettings from './SystemSettings';
import Service from './Service';
import { DashboardProvider } from './dashboardContext';

const Dashboard = () => {
    const [serviceData, setServiceData] = useState('Initial Service Data');
    const [settingsData, setSettingsData] = useState('Initial Settings Data');
    return (
        <DashboardProvider
        value={{
             serviceData,
              setServiceData, 
              settingsData, 
              setSettingsData 
              
              }}>
            <div className="dashboard-container">
                <SideNavigationBar />
                <div className="right-dashboard-container">
                    <>
                        <h1>Welcome to Your Dashboard</h1>
                        <p>This is where you can get an overview of your financial information.</p>
                        <div className="summary-section">
                            <h2>Summary</h2>
                            <p>Here you can see a summary of your financial status, including your current balance, expenses, income, and savings.</p>
                        </div>
                        <div className="transactions-section">
                            <h2>Recent Transactions</h2>
                            <ul>
                                <li>Transaction 1</li>
                                <li>Transaction 2</li>
                                <li>Transaction 3</li>
                            </ul>
                        </div>
                        <Service />
                        <SystemSettings />
                    </>
                </div>
            </div>
        </DashboardProvider>
    );
};

export default Dashboard;
