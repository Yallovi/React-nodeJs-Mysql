import React  from 'react';
import { Input } from '../../common/FormsControll/FormsControls';
import s from './Authorizathion.module.css';
import { Field, reduxForm } from 'redux-form'
import { emailValid, maxLengthCreater,passwordValid,required } from '../utils/validators/validators';
import { connect } from 'react-redux';
import {signup} from '../../reducers/authReducer';
import {useSelector} from 'react-redux';



const  maxLength50 = maxLengthCreater(30);

const RegistrationForm = (props) => {
    const successMessage = useSelector(state => state.authReducer.successMessage);
    return(
        <form onSubmit = {props.handleSubmit}>
            <div className={s.authorization}>
                <div className={s.authorization__header}>Регистрация</div>
                <Field name = "name" component ={Input} validate={[required, maxLength50]} type="text" placeholder="Имя" />
                <Field name = "last_name" component ={Input} validate={[required, maxLength50]} type="text" placeholder="Фамилия"/>
                <Field name = "email" component ={Input} validate={[required, maxLength50, emailValid]} type="text" placeholder="Email"/>
                <Field name = "password" component ={Input} validate={[required, passwordValid]} type="password" placeholder="Password"/>
                {
                props.error && <div className = {s.formSummaryError}>
                    {props.error}
                </div>
                }
                { successMessage  &&
                    <div className = {s.formSuccess}> {successMessage} </div>
                }
                <button className={s.authorization__btn} >Отправить</button>
            </div>
        </form>
    );
};

const RegistrationReduxForm = reduxForm({form: "registration"})(RegistrationForm);

const Registration = (props) =>{
    const onSubmit = (formData) => {
        // console.log('formData: ', formData);
        props.signup(formData.name,formData.last_name,formData.email, formData.password);

    }

    return(
        <div>
            <RegistrationReduxForm onSubmit={onSubmit} />
        </div>
    );
};



export default connect(null, { signup})(Registration);
