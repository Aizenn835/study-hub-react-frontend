import './NavHeader.css'
import Logo from '../../assets/logo.png'

export default function NavHeader(){
    return(
        <div className="header-container">
            <div className="logo-container">
                 <img src={Logo} alt="This is the official LCUP LOGO" className='sidebar-logo'/>
            </div>
            <div className="inner-container">
                <h2 className="header">Study <span className='header-second-color'>Hub</span></h2>
                <p className="supporting-info">Academic workspace</p>
            </div>
        </div>
    );
}