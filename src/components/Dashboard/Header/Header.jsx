import './Header.css'
import Settings from '../Settings/Settings.jsx'
import Search from '../Search/Search.jsx'
import { IconSettings , IconUser , IconNotification} from '@tabler/icons-react'

export default function Header(){
    return(
        <div className="dashboard-container">
           <div className="dsh-inner-container">
             <h1 className='greetings-dashboard'>Good afternoon, Consolanian</h1>
             <p className='date-dashboard'>Sunday, September 20, 2026</p>
           </div>
           <div className="dsh-right">
            <div className="search-bar">
              <Search />
            </div>
             <div className="settings-dsh">
                <Settings logo={<IconNotification stroke={2} size={22}/>}/>
                <Settings logo={<IconUser stroke={2} size={22}/>}/>
                <Settings logo={<IconSettings stroke={2} size={22}/>}/>
             </div>
           </div>
        </div>
    );
}