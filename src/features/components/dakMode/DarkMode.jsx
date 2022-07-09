import React from 'react'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector,useDispatch } from 'react-redux';
import {toggleTheme} from './darkModeSlice'

function DarkMode() {
    const dispatch = useDispatch();
    const theme = useSelector(state=>state.theme.darkMode)
    console.log(theme)

    const handleTheme =()=>{
         dispatch(toggleTheme())
    }
  return (
    <div onClick={handleTheme}>
       {theme ? <LightModeIcon/> : <DarkModeOutlined/> } 
    </div>
  )
}

export default DarkMode