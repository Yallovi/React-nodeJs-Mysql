import React from 'react';
import s from './Authorizathion.module.css';
import { Input } from '../../common/FormsControll/FormsControls';
import {required , maxLengthCreater, emailValid} from '../utils/validators/validators';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../reducers/authReducer';
import {useSelector} from 'react-redux';
import CircularStatic from '../preloader/Preloader';
import Alert from '../hooks/useAlert'
 

const maxLength50 = maxLengthCreater(50);

const LoginForm = (props) => {

    const isFetching = useSelector(state => state.authReducer.isFetching); 

    return(
        <> 
        <div className={s.container}>
            <form onSubmit={props.handleSubmit}>
                <div className={s.authorization}>
                    <div className={s.authorization__header}>Авторизация</div>
                    <Field name="email" component={Input} validate={[required, maxLength50, emailValid]} type="text" placeholder='Введите email' />
                    <Field name="password" component={Input} validate={[required, maxLength50]} type="password" placeholder='Введите пароль' />
                    {props.error && <div className={s.formSummaryError}>
                        {props.error}
                    </div>}
                    <button className={s.authorization__btn}>Войти</button>
                    {isFetching ? <CircularStatic /> : null}
                </div>
            </form>
        </div></>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    console.log('props: ', props);
    const onSubmit = (formData) => {
        console.log('formData: ', formData);
        props.login(formData.email, formData.password);

    }

    return <div>
        
        <LoginReduxForm  onSubmit={onSubmit}  />
    </div>
};

export default connect(null, {login})(Login);
