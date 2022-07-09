import React from 'react'
import Dashboard from './features/dashboard/Dashboard'
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state=>state.theme.darkMode)
  return (
    <div className={theme ? "dark_theme" : "light_theme"}>
     <Dashboard/>
    </div>
  )
}

export default App