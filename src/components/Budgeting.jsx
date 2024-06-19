import React from 'react';
import './Budgeting.css';

const Budgeting = () => {
    
  return (
    <div className="budgeting-container">
      
      
        <>
          <h1>Budgeting Tools</h1>
          <p>Manage your finances effectively with our budgeting tools.</p>
          <div className="tool-section">
            <h2>Expense Tracker</h2>
            <p>Track your expenses and categorize them to better understand your spending habits.</p>
          </div>
          <div className="tool-section">
            <h2>Budget Planner</h2>
            <p>Create and manage your budget to ensure you stay on track with your financial goals.</p>
          </div>
          <div className="tool-section">
            <h2>Bill Reminder</h2>
            <p>Never miss a bill payment again with our convenient bill reminder feature.</p>
          </div>
        </>
      
    </div>
  );
};

export default Budgeting;
