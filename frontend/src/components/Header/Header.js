import logo from '../../assets/Logo.png'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
    <nav className="main-nav">
        <Link to='/'>
            <div className="main-nav-logo">
                <img
                    src={logo} 
                    className="main-nav-logo-image" 
                    alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </div>
        </Link>
        <Link to='/login'>
            <div className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </div>
        </Link>
    </nav>
)}