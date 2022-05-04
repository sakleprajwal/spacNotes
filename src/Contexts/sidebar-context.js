import { useContext, createContext, useState } from "react";

const sidebarContext = createContext();

const SidebarProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <sidebarContext.Provider value={{ sidebar, setSidebar }}>
            {children}
        </sidebarContext.Provider>
    )    
}

const useSidebar = () => useContext(sidebarContext);

export {useSidebar, SidebarProvider}