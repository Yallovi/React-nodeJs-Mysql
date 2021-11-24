import React, {useState} from 'react';
import s from './Authorizathion.module.css';
import { Input } from '../../common/FormsControll/FormsControls';
import {required , maxLengthCreater} from '../utils/validators/validators';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../reducers/authReducer';
// import { Input } from '../utils/Input';
// import {useDispatch} from 'react-redux';
// import { authorizationApi } from '../../api/api';

const maxLength50 = maxLengthCreater(50);

const LoginForm = (props) => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const dispatch = useDispatch();

    // return (
    //     <div className={s.authorization}>
    //         <div className={s.authorization__header}>Авторизация</div>
    //         <Input value={email} setValue ={setEmail} type="text" placeholder='Введите email' />
    //         <Input value={password} setValue = {setPassword} type="password" placeholder='Введите пароль' />
    //         <button className={s.authorization__btn} onClick={()=> dispatch(authorizationApi(email,password))} >Войти</button>
    //     </div>
    // );
    return( 
        <form onSubmit={props.handleSubmit}>
            <div className={s.authorization}>
                <div className={s.authorization__header}>Авторизация</div>
                <Field name="email" component={Input} validate={[required, maxLength50]} type="text" placeholder='Введите email' />
                <Field name="password" component={Input} validate={[required, maxLength50]}  type="password" placeholder='Введите пароль' />
                <button className={s.authorization__btn}>Войти</button>
            </div>
        </form>
        
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log('formData: ', formData);
        props.login(formData.email, formData.password);

    }

    return <div>
        <LoginReduxForm  onSubmit={onSubmit}  />
    </div>
};

export default connect(null, {login})(Login);
