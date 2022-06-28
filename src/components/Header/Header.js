import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Usefirebase from '../../Hooks/Usefirebase';
import './Header.css';
const Header = () => {
    const { user, Logout } = useAuth();
    return (
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/shipping'>shipping</Link>
            <Link to='/placeorder'>placeorder</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <span>{user?.displayName}</span>
            {user.email && <Link to='/login' onClick={Logout}> Logout</Link>}
        </div>
    );
};

export default Header;