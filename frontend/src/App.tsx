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
import Test from "./test";



export default function App() {

  const { toggleDarkMode, darkMode } = useContext(DarkModeContext) as DarkModeContextType

  console.log(darkMode)
  
  
  return (
    <DarkModeProvider>
    
    <Test />
   
    </DarkModeProvider>
    
    
  );
}
