import React  from 'react'
import './nav.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Item from '../item/Item';
import DarkMode from '../dakMode/DarkMode';



function Nav() {
    
    const icons = [
        {id:1,item:(<LanguageIcon className="nav_icon"/>),text:"English"},
        {id:2,item:(<DarkMode className='nav_icon'/>)},
        {id:3,item:(<FullscreenIcon className="nav_icon"/>)},
        {id:4,item:(<NotificationsNoneIcon className="nav_icon"/>),count:(<span className='count'>1</span>)},
        {id:5,item:(<ChatBubbleOutlineIcon className="nav_icon"/>),message:(<span className='message'>3</span>)},
        {id:6,item:(<FormatListNumberedIcon className="nav_icon"/>)},
        {id:7,avatar:(<img src="https://www.certificationplanner.com/images/male.svg" className="avatar"/>)},
    ]

   

    const renderedIcons = icons.map(item=>{
        return <Item item={item}/>
    })

  return (
    <nav className='navi'>
       <div className="wrapper container">

            {/* navbar left */}
            <div className="search">
                <input type="text" placeholder='search....'/>
                <SearchIcon fontSize='small'/>
            </div>

             {/* navbar right icons */}
            <div className="items">
                {renderedIcons}
            </div>
        </div>
    </nav>
  )
}

export default Nav