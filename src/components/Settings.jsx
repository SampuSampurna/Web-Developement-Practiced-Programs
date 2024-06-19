import React from 'react';
import './Settings.css';

const Settings = ({ isAuthenticated }) => {
  // Function to handle settings changes
  const handleSettingsChange = (event) => {
    // Handle settings changes here
    console.log('Setting changed:', event.target.name, event.target.value);
  };

  return (
    <>
      
        <div className="settings">
          <h2>Settings</h2>
          <label>
            Theme:
            <select name="theme" onChange={handleSettingsChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <br />
          <label>
            Language:
            <select name="language" onChange={handleSettingsChange}>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </label>
          {/* Add more settings options as needed */}
        </div>
      
    </>
  );
}

export default Settings;
