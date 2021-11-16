import React from 'react';
import { Input } from '../utils/Input';
import s from './Authorizathion.module.css';

const Registration = (props) => {
    return (
        <div className={s.authorization}>
            <div className={s.authorization__header}>Регистрация</div>
                <Input type="text" placeholder="Введите email" />
                <Input type="password" placeholder="Введите пароль"/>
                <button className={s.authorization__btn}>Отправить</button>
        </div>
    );
};

export default Registration;
