import React from 'react';
import './Goals.css';

const Goals = () => {
    
  return (
    <div className="goals-container">
      
        <>
          <h1>Financial Goals</h1>
          <p>Set and track your financial goals to achieve financial success.</p>
          <div className="goal-section">
            <h2>Save for a Rainy Day</h2>
            <p>Set aside funds for unexpected expenses and emergencies.</p>
          </div>
          <div className="goal-section">
            <h2>Plan for Retirement</h2>
            <p>Start saving early and invest wisely for a comfortable retirement.</p>
          </div>
          <div className="goal-section">
            <h2>Pay Off Debt</h2>
            <p>Create a debt repayment plan to become debt-free and improve your financial health.</p>
          </div>
        </>
      
    </div>
  );
};

export default Goals;
