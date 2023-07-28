import React from "react";
import NavBar from './components/NavBar'
import AllEntries from './routes/AllEntries'
import NewEntry from './routes/NewEntry'
import EditEntry from './routes/EditEntry'
import Setting from './routes/Setting'
import { EntryProvider } from './utilities/globalContext'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {useContext} from 'react'
import { DarkModeContext, DarkModeProvider } from "./utilities/darkModeContext";
import { DarkModeContextType } from "./@types/context";



export default function Test() {

  const { toggleDarkMode, darkMode } = useContext(DarkModeContext) as DarkModeContextType

  console.log(darkMode)
  
  
  return (
    
    
    
    
    <div
      className={`h-screen w-full flex items-center  flex-col ${
        darkMode && 'dark'
      }`}
    >
    <section >
  <Router>
    <EntryProvider>
    <NavBar ></NavBar>
      <Routes>
        <Route path="/" element={<AllEntries/>}>
        </Route>
        <Route path="create" element={<NewEntry/>}>
        </Route>
        <Route path="edit/:id" element={<EditEntry/>}>
        </Route>
        <Route path="setting" element={<Setting/>}>
        </Route>
      </Routes>
    </EntryProvider>
    </Router>
    
    
    
    
    </section>
    </div>
    
    
    
  );
}
