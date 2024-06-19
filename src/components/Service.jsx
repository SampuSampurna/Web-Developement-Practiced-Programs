import { useContext } from "react";
import { DashboardContext } from "./dashboardContext";

const Service = () => {
    const { serviceData, setServiceData } = useContext(DashboardContext);
    const handleServiceUpdate = () => {
        setServiceData('Service Data Updated');
    };
return (
        <div className="service-section">
            <h2>Services</h2>
            <p>{serviceData}</p>
            <button onClick={handleServiceUpdate}>Update Service Data</button>
        </div>
    );
};
export default Service;