import {React,  useState}  from 'react';
import { Input } from '../utils/Input';
import s from './Authorizathion.module.css';
import {registrathionApi} from '../../api/api';

const Registration = (props) => {

    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div className={s.authorization}>
            <div className={s.authorization__header}>Регистрация</div>
                <Input value={name} setValue={setName} type="text" placeholder="Имя" />
                <Input value={last_name} setValue={setLastName} type="text" placeholder="Фамилия"/>
                <Input value={email} setValue={setEmail} type="text" placeholder="Email"/>
                <Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
                <button className={s.authorization__btn} onClick= {() => registrathionApi(name,last_name, email, password )}   >Отправить</button>
        </div>
    );
};

export default Registration;
