import React, { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Rohit" >{children}</AppContext.Provider>
}

//Global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext); 
}

export {AppContext , AppProvider , useGlobalContext};