import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { DarkModeContextType } from '../@types/context'
import { DarkModeContext } from '../utilities/darkModeContext'

export default function NavBar(){
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext) as DarkModeContextType

 
    return(
      <nav className="flex justify-center gap-5">
        <NavLink className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white" to={'/'}>All Entries</NavLink>
        <NavLink className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white" to={'/create'}>New Entry</NavLink>
        <NavLink className="m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white" to={'/setting'}>Settings</NavLink>
      </nav>
    )
}