import { createContext } from "react";

const DashboardContext = createContext();
const DashboardProvider = DashboardContext.Provider

export {
    DashboardContext,
    DashboardProvider
}