import './Header.css'
import Settings from './Settings';
import { IconSettings , IconUser , IconNotification} from '@tabler/icons-react';

export default function Header(){
    return(
        <div className="dashboard-container">
           <div className="dsh-inner-container">
             <h1 className='greetings-dashboard'>Good afternoon, Consolanian</h1>
             <p className='date-dashboard'>Sunday, September 20, 2026</p>
           </div>
           <div className="dsh-settings">
             <Settings logo={<IconNotification stroke={2} size={25}/>}/>
             <Settings logo={<IconUser stroke={2} size={25}/>}/>
             <Settings logo={<IconSettings stroke={2} size={25}/>}/>
           </div>
        </div>
    );
}