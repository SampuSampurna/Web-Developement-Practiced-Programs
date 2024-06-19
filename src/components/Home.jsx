import React from 'react';
import moneyLogo from './moneylogo.jpg';
import moneyLogo1 from './moneylogo1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
    const validateHome = () => {
       
        alert("validation successful!!");
        localStorage.setItem("dashboardPage", "true");
        localStorage.setItem("budgetingPage", "true");
        localStorage.setItem("goalsPage", "true");
        localStorage.setItem("tipsPage", "true");
        
    };
    return (
        <div className="home-container">
            <div className="intro-section">
                <h1 className="heading">Welcome to MyMoneyManager</h1>
                <p className="description">
                    MyMoneyManager is your trusted financial companion, designed to empower you to take control 
                    of your finances and achieve your dreams. Our platform provides comprehensive tools and 
                    resources to help you manage your money effectively, set and track your financial goals, 
                    and make informed decisions about your financial future.
                </p>
                <div className="quote-container">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="quote-icon" />
                    <p className="quote">"Money is a terrible master but an excellent servant." - P.T. Barnum</p>
                </div>
                <img src={moneyLogo} alt="Money" className="intro-image" />
                <p className="description">
                    We believe that financial freedom is within reach for everyone. Whether you're saving for 
                    a rainy day, planning for retirement, or investing for the future, MyMoneyManager provides 
                    you with the tools and guidance you need to navigate your finances with confidence and 
                    achieve your goals.
                </p>
                <div className="quote-container">
                    <FontAwesomeIcon icon={faPiggyBank} className="quote-icon" />
                    <p className="quote">"A penny saved is a penny earned." - Benjamin Franklin</p>
                </div>
                <img src={moneyLogo1} alt="Saving Money" className="intro-image" />
                <p className="description">
                    Our platform is more than just a budgeting tool—it's a financial partner that grows with 
                    you. With intuitive features, personalized insights, and expert advice, MyMoneyManager 
                    helps you make smart decisions about your money and unlock your path to financial well-being.
                </p>
            </div>
            <div className="benefits-section">
                <p className="side-heading">Why Choose MyMoneyManager?</p>
                <ul className="benefits-list">
                    <li>Effortlessly manage your finances in one place</li>
                    <li>Set and track your financial goals with ease</li>
                    <li>Access valuable tips and resources for financial success</li>
                    <li>Stay informed and make smart financial decisions</li>
                </ul>
            </div>
            <div className="feature-section">
                <h2 className="heading">Personalized Financial Insights</h2>
                <p className="description">
                    MyMoneyManager provides personalized financial insights tailored to your unique financial situation. 
                    Our advanced algorithms analyze your spending patterns, identify areas for improvement, and offer 
                    actionable recommendations to help you achieve your financial goals faster.
                </p>
            </div>
            <div>
                <button className="validate-btn" onClick={validateHome}>Validated</button>
            </div>
        </div>
    );
}

export default Home;