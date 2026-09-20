import './NavList.css'
import { IconListTree , IconFocusCentered , IconBrandJira , IconNotes} from '@tabler/icons-react';

export default function NavList({currentPath}){
    const navItems = [
        {label: "Overview" , logo: <IconListTree stroke={2} size={20}/>, path: "/overview"},
        {label: "Focus Timer" , logo:<IconFocusCentered stroke={2} size={20} />, path: "/focus"},
        {label: "Tasks" ,  logo:<IconBrandJira stroke={2} size={20}/>, path: "/tasks"},
        {label: "Notes" , logo:<IconNotes stroke={2} size={20}/>, path: "/notes"},
    ]

    return(
        <nav className="nav-list">
            {navItems.map((task) => (
                <a 
                 href={task.path}
                 key={task.path} 
                 className={task.path === currentPath ? "nav active" : "nav"}
                >
                   {task.logo}
                   <p>{task.label}</p>
                </a>
            ))}
        </nav>
    );
} 