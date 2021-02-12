import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/Logo2.png'

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.logo}
            src={logo}
            alt="logo"/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>
                    {props.login}
                    <button onClick={props.logout}>Log out</button>
                  </div>
                : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
        </div>
    </header>
}
export default Header;