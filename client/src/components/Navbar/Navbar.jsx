import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import logo from '../../assets/image/header-logo.png';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { logout } from '../../reducers/authReducer';
import Modal from '../modal-window/Modal';
import Login from '../registration/Login';
 
const Navbar = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const dispatch = useDispatch();

    const [activeModal, setActiveModal] = useState(false)

    return(

        <div className={s.navbar}>
            <div className={s.container}>
                <NavLink to="/home" ><img className={s.navbar__logo} src={logo} alt="Logo" /></NavLink>
                {isAuth &&<div className={s.navbar__tasks}> <NavLink to="/manual">Учебник</NavLink> </div>}
                {isAuth &&<div className={s.navbar__tasks}> <NavLink to="/task">Тренажер</NavLink> </div>}
               { !isAuth &&<div className={s.navbar__login}> <button onClick={()=> setActiveModal(true)}>Войти</button> </div>}
                {!isAuth &&<div className={s.navbar__registrathion}><NavLink to='/registrahion'>Регистрация</NavLink></div>}
                {isAuth &&<div  className={s.navbar__login} onClick={()=>dispatch(logout())}>Выход</div>}

            </div>
            <Modal activeModal={activeModal} setActiveModal={setActiveModal}   >  
                <Login />
            </Modal>
            
        </div>
    );
};

export default Navbar;

