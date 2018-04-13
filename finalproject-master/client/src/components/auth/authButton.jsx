import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';
import style from './authButton.module.scss';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className={style.button} to="/logout">Logout</Link>;
    } else {
        return <Link style={{textDecoration: 'none', color: 'white', }} className={style.button} to="/login">Login</Link>;
    }
};

export default AuthButton;