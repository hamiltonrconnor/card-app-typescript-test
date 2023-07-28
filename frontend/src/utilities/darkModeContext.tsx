import React, {createContext, useState,ReactNode} from "react";
import { DarkModeContextType } from "../@types/context";



export const DarkModeContext = createContext<DarkModeContextType>({ 
    darkMode: true,
    toggleDarkMode: (_value: Boolean) => { }
  });




export const DarkModeProvider: React.FC<{children : ReactNode}> = ({children}) => {
    
    const [darkMode,setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };
    

    
    
    return (
        <DarkModeContext.Provider value={{ darkMode,toggleDarkMode}}>
          {children}
        </DarkModeContext.Provider>
      )
}
