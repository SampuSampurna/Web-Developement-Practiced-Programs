import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Budgeting from "./components/Budgeting";
import Goals from "./components/Goals";
import TipsResources from "./components/TipsResources";
import Settings from './components/Settings';
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/Login';
import { Store } from './pages/store';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          {isAuthenticated && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/budgeting" element={<Budgeting />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/tips" element={<TipsResources />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/store" element={<Store />} />
            </>
          )}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : null}
          />
           <Route path="/login" element={<LoginForm  setIsAuthenticated={setIsAuthenticated}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
