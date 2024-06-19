import React from 'react';
import './TipsResources.css'; 

const TipsResources = () => {
    return (
        <div className="tips-resources-container">
            
                <>
                    <h1>Tips & Resources</h1>
                    <p>Access valuable tips and resources to improve your financial literacy and make informed decisions.</p>
                    <div className="tip">
                        <h2>Creating a Budget</h2>
                        <p>Learn how to create and maintain a budget to manage your expenses effectively.</p>
                    </div>
                    <div className="tip">
                        <h2>Investment Strategies</h2>
                        <p>Explore different investment options and strategies to grow your wealth.</p>
                    </div>
                    <div className="tip">
                        <h2>Debt Management</h2>
                        <p>Discover techniques for managing and reducing debt to achieve financial freedom.</p>
                    </div>
                </>
            
        </div>
    );
}

export default TipsResources;
