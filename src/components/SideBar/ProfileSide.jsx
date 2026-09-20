import { IconUser } from '@tabler/icons-react'
import './ProfileSide.css'

export default function ProfileSide(){
    return(
        <div className="profile-container">
            <div className="background-logo">
                <IconUser stroke={2} />
            </div>
            <div className="name-container">
                <p className='username'>Lei Justine Clemente</p>
                <span className='user-role'>Student</span>
            </div>
        </div>
    );
}