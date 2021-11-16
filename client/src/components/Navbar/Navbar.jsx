import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import logo from '../../assets/image/header-logo.png';
 
const Navbar = () => {
    return(

        <div className={s.navbar}>
            <div className={s.container}>
                <img className={s.navbar__logo} src={logo} alt="Logo" />
                <div className={s.navbar__login}> <NavLink to="/login">Войти</NavLink> </div>
                <div className={s.navbar__registrathion}><NavLink to='/registrahion'>Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;
