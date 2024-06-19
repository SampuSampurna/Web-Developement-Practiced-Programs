import React, { useEffect, useState } from 'react';
import logo from './logo.jpg';
import './NavigationBar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoginValidated, setIsLoginValidated }) => {
    const isLogin = localStorage.getItem("loginPage");
    const history = useNavigate();
    const [isOpen, setIsOpen] = useState(false); 
    useEffect(() => {
        localStorage.setItem("dashboardPage", false);
        localStorage.setItem("budgetingPage", false);
        localStorage.setItem("goalsPage", false);
        localStorage.setItem("tipsPage", false);
        localStorage.setItem("loginPage", false);
    }, []);
    const handleClose = () => {
        setIsOpen(false); 
        history("/home");
    };
    const navigateToDashboard = () => {
        const isDashboardValidated = localStorage.getItem("dashboardPage") === "true";
        if(isLogin === "false"){
            history("/login");
        }else if(!isDashboardValidated) {
            setIsOpen(true);
            history("/home");
        }  else {
            history("/dashboard");
    }
    };
    const navigateToBudgeting = () => {
        const isBudgetingValidated = localStorage.getItem("budgetingPage") === "true";
        if(isLogin === "false"){
            history("/login");
        }else if (!isBudgetingValidated) {
            setIsOpen(true);
        history("/home");
        } else {
           history("/budgeting");
        }
    };
    const navigateToGoals = () => {
        const isGoalsValidated = localStorage.getItem("goalsPage") === "true";
        if(isLogin === "false"){
            history("/login");
        }else if (!isGoalsValidated) {
        setIsOpen(true);
        history("/home");
        } else {
            history("/goals");
        }
    };

    const navigateToTipsResources = () => {
        const isTipsResourcesValidated = localStorage.getItem("tipsPage") === "true";
        if(isLogin === "false"){
            history("/login");
        }else  if (!isTipsResourcesValidated) {
            setIsOpen(true);
        history("/home");
        } else {
            history("/tips");
            
        }
    };
    const navigateToHome = () => {
        
        if (isLogin === "false"){
            history("/login")
        } 
       
        else {
           
            history('/home');
            setIsOpen(false);
        }  
      };
    const goToLogin = ()=>{
        history('/login');
    }
    const navigateToStore = ()=>{
        if (isLogin === "false"){
            history("/login")
        } 
       
        else {
           
            history('/store');
            setIsOpen(false);
        }  
    }
    return (
        <div className="navbar">
            {isOpen && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-inner">
                            <p>Please validate the home page first.</p>
                            <button onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="logo">
                <div><img src={logo} alt="MyMoneyManager" /></div>
                <nav>
                    <div>
                    
                    <span className="custom-link" onClick={navigateToHome}>Home</span>
                        <span className="custom-link" onClick={navigateToDashboard}>Dashboard</span>
                        <span className="custom-link" onClick={navigateToBudgeting}>Budgeting</span>
                        <span className="custom-link" onClick={navigateToGoals}>Goals</span>
                        <span className="custom-link" onClick={navigateToTipsResources}>Tips & Resources</span>
                        <span className="custom-link" onClick={navigateToStore}>Store</span>
                        
                    </div>
                </nav>
            </div>
            <div className='search'>
                <input type="text" placeholder="Search 🔍" />
                <button><Link to="/settings">Settings</Link></button>
                <button onClick={goToLogin}> Login</button>
                
            </div>
        </div>
    );
};

export default Navbar;