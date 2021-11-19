import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import logo from '../../assets/image/header-logo.png';
import {useSelector} from 'react-redux';
 
const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);

    return(

        <div className={s.navbar}>
            <div className={s.container}>
                <img className={s.navbar__logo} src={logo} alt="Logo" />
               { !isAuth &&<div className={s.navbar__login}> <NavLink to="/login">Войти</NavLink> </div>}
                {!isAuth &&<div className={s.navbar__registrathion}><NavLink to='/registrahion'>Регистрация</NavLink></div>}
                {isAuth &&<div className={s.navbar__registrathion}><NavLink to='/logout'>Выход</NavLink></div>}

            </div>
        </div>
    );
};

export default Navbar;
