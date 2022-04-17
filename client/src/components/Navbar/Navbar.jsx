import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import logo from '../../assets/image/header-logo.png';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { logout } from '../../reducers/authReducer';
import Modal from '../modal-window/Modal';
import Login from '../registration/Login';
import Regestration from '../registration/Regestration';

 
const Navbar = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const dispatch = useDispatch();

    const [activeModal, setActiveModal] = useState(false)
    const [nameButton, setNameButton] = useState('')

    return(

        <div className={s.navbar}>
            <div className={s.container}>
                <NavLink to="/home" ><img className={s.navbar__logo} src={logo} alt="Logo" /></NavLink>
                {<div > <NavLink className={s.navbar__tasks} to="/manual">Учебник</NavLink> </div>}
                <div> <NavLink className={s.navbar__tasks} to="/task">Тренажер</NavLink> </div>
               { !isAuth &&<div className={s.navbar__login}> 
                <button className={s.button} value="login" onClick={(e)=> {
                    setActiveModal(true)
                    setNameButton('login') 
                    }}>
                        Войти
                        </button> 
                    </div>}
                {!isAuth &&<div className={s.navbar__registrathion}><button className={s.button} onClick={()=> {
                    setActiveModal(true)
                    setNameButton('registration')
                    } }>Регистрация</button></div>}
                {isAuth &&<div  className={s.navbar__login} onClick={()=>dispatch(logout())}>Выход</div>}
            </div>
            {
                nameButton === 'login' ?
                    <Modal activeModal={activeModal} setActiveModal={setActiveModal}>  
                        <Login />
                    </Modal>
                : 
                    <Modal activeModal={activeModal} setActiveModal={setActiveModal}>  
                        <Regestration />
                    </Modal>
            }
            
        </div>
    );
};

export default Navbar;

