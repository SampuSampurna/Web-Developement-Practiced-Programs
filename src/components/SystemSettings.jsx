import { useContext } from "react";
import { DashboardContext } from "./dashboardContext";

const SystemSettings = () => {
    const { settingsData, setSettingsData } = useContext(DashboardContext);
    const handleSettingsUpdate = () => {
        setSettingsData('Updated Settings Data');
    };

    return (
        <div className="settings-section">
            <h2>Settings</h2>
            <p>{settingsData}</p>
            <button onClick={handleSettingsUpdate}>Update Settings Data</button>
        </div>
    );
};
export default SystemSettings;