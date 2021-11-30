import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import logo from '../../assets/image/header-logo.png';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { logout } from '../../reducers/authReducer';
 
const Navbar = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const dispatch = useDispatch();

    return(

        <div className={s.navbar}>
            <div className={s.container}>
                <img className={s.navbar__logo} src={logo} alt="Logo" />
               { !isAuth &&<div className={s.navbar__login}> <NavLink to="/login">Войти</NavLink> </div>}
                {!isAuth &&<div className={s.navbar__registrathion}><NavLink to='/registrahion'>Регистрация</NavLink></div>}
                {isAuth &&<div  className={s.navbar__login} onClick={()=>dispatch(logout())}>Выход</div>}

            </div>
        </div>
    );
};

export default Navbar;
