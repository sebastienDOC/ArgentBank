import { useState } from 'react';
import logo from '../../assets/argentBankLogo.webp'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { revertAll } from '../../redux/authSlice';

export function getUser() {
    let user = localStorage.getItem('user')
    if (user) {
        user = JSON.stringify(user)
    } else {
        user = null
    }
    return user
}

export default function Header() {
    const [user, setUser] = useState(getUser())
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userName = localStorage.getItem('userName')

    function handleLogout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        dispatch(revertAll())
        setUser(null)
        navigate('/')
    }

    const authButton = () => {
        if (user) {
            return (
                <div className='row'>
                    <Link to='/account' className='main-nav-item'>
                        <p>{userName}</p>
                        <i className="fa fa-user-circle fa-2x"></i>
                    </Link>
                    <div className="main-nav-item">
                        <i className="fa fa-solid fa-gear fa-2x"></i>
                    </div>
                    <div className="main-nav-item" onClick={handleLogout}>
                        <i className="fa fa-solid fa-power-off fa-2x"></i>
                    </div>
                </div>
            );
        } else {
            return (
                <Link to='/login'>
                    <div className="main-nav-item">
                        <i className="fa fa-user-circle fa-2x"></i>
                        <p className='main-nav-item-txt'>Sign In</p>
                    </div>
                </Link>
            );
        }
    }

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
            {authButton()}
        </nav>    
    )
}