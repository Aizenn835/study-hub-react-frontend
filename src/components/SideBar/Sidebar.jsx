import NavHeader from './NavHeader.jsx'
import NavList from './NavList.jsx'
import ProfileSide from './ProfileSide.jsx';
import './Sidebar.css'

export default function Sidebar({currentPath}){
    return(
        <div className='sidebar-container'>
            <NavHeader />
            <div className="inner-container">
                <NavList currentPath={currentPath}/>
                <ProfileSide />
            </div>
        </div>
    );
}