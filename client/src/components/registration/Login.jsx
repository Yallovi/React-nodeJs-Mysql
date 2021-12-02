import React from 'react';
import s from './Authorizathion.module.css';
import { Input } from '../../common/FormsControll/FormsControls';
import {required , maxLengthCreater, emailValid} from '../utils/validators/validators';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../reducers/authReducer';
import {useSelector} from 'react-redux';
import Preloader from '../preloader/Preloader';
// import { Input } from '../utils/Input';
// import {useDispatch} from 'react-redux';
// import { authorizationApi } from '../../api/api';


const maxLength50 = maxLengthCreater(50);

const LoginForm = (props) => {

const isFetching = useSelector(state => state.authReducer.isFetching);  

    return( 
        <form onSubmit={props.handleSubmit}>
            <div className={s.authorization}>
                <div className={s.authorization__header}>Авторизация</div>
                <Field name="email" component={Input} validate={[required, maxLength50, emailValid]} type="text" placeholder='Введите email' />
                <Field name="password" component={Input} validate={[required, maxLength50]}  type="password" placeholder='Введите пароль' />
                {
                props.error && <div className = {s.formSummaryError}>
                    {props.error}
                </div>
                }
                <button className={s.authorization__btn}>Войти</button>
                {isFetching ? <Preloader/> : null }
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
