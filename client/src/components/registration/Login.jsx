import React, {useState} from 'react';
import { Input } from '../utils/Input';
import s from './Authorizathion.module.css';
import {useDispatch} from 'react-redux';
import { authorizationApi } from '../../api/api';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    return (
        <div className={s.authorization}>
            <div className={s.authorization__header}>Авторизация</div>
            <Input value={email} setValue ={setEmail} type="text" placeholder='Введите email' />
            <Input value={password} setValue = {setPassword} type="password" placeholder='Введите пароль' />
            <button className={s.authorization__btn} onClick={()=> dispatch(authorizationApi(email,password))} >Войти</button>
        </div>
    );
};

export default Login;
