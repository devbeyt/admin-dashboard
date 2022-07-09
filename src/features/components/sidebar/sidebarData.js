import { IoIosOptions} from 'react-icons/io'
import {AiOutlineDashboard,AiOutlineForm,AiOutlineMail} from 'react-icons/ai'
import {MdOutlineWidgets} from 'react-icons/md'
import {SiElement,SiRobotframework} from 'react-icons/si'
import {RiPagesFill} from 'react-icons/ri'
import {BsTable,BsFillCalendarMonthFill} from 'react-icons/bs'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';



export const sidebarData = {
    ids: ["id1","id2","id3","id4","id5","id6","id7","id8","id9","id10","id11","id12"],
    entities:{ 
        // ************* 1 *******************
        id1: {id:"id1",icon:(<AiOutlineDashboard className='icon'/>),name:"Dashboard",link:"/dashboard",hasSubMenu:false,
             subMenu:[
                {id:"sub_1",name:"Dashboard v1",link:"/dashboard-v1",hasSubMenu:false,},
                {id:"sub_2",name:"Dashboard v2",link:"/dashboard-v2",hasSubMenu:false,},
                {id:"sub_3",name:"Dashboard v3",link:"/dashboard-v3",hasSubMenu:false,}
             ] 
             },
        // ************* 2 *******************
        id2: {id:"id2",icon:(<MdOutlineWidgets className='icon'/>),name:"Widgets",link:"/widgets",hasSubMenu:false,},
        // ************* 3 *******************
        id3: {id:"id3",icon:(<IoIosOptions className='icon'/>),name:"Layout Options",link:"/options",hasSubMenu:false,},
        // ************* 4 *******************
        id4: {id:"id4",icon:(<StackedLineChartIcon className='icon'/>),name:"Charts",link:"/charts",hasSubMenu:false,},
        // ************* 5 *******************
        id5: {id:"id5",icon:(<SiElement className='icon'/>),name:"UI Elements",link:"/elements",hasSubMenu:false,},
        // ************* 6 *******************
        id6: {id:"id6",icon:(<AiOutlineForm className='icon'/>),name:"Forms",link:"/forms",hasSubMenu:false,},
        // ************* 7 *******************
        id7: {id:"id7",icon:(<BsTable className='icon'/>),name:"Tables",link:"/tables",hasSubMenu:false,},
        // ************* 8 *******************
        id8: {id:"id8",title:"EXAMPLES",hasSubMenu:false,},
        // ************* 9 *******************
        id9: {id:"id9",icon:(<BsFillCalendarMonthFill className='icon'/>),name:"Calendar",link:"/calendar",hasSubMenu:false,},
        // ************* 10 *******************
        id10: {id:"id10",icon:(<SiRobotframework className='icon'/>),name:"Gallery",link:"/gallery",hasSubMenu:false,},
        // ************* 11 *******************
        id11: {id:"id11",icon:(<AiOutlineMail className='icon'/>),name:"Mail box",link:"/mail",hasSubMenu:false,},
          // ************* 12 *******************
        id12: {id:"id12",icon:(<RiPagesFill className='icon'/>),name:"Pages",link:"/pages",hasSubMenu:false,},
    }
}