import {React,  useState}  from 'react';
// import { Input } from '../utils/Input';
import { Input } from '../../common/FormsControll/FormsControls';
import s from './Authorizathion.module.css';
// import {registrathionApi} from '../../api/api';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreater,required } from '../utils/validators/validators';
import { connect } from 'react-redux';
import {signup} from '../../reducers/authReducer';


const  maxLength50 = maxLengthCreater(30);

const RegistrationForm = (props) => {

    // const [name, setName] = useState('');
    // const [last_name, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');



    // return (
    //     <div className={s.authorization}>
    //         <div className={s.authorization__header}>Регистрация</div>
    //             <Input value={name} setValue={setName} type="text" placeholder="Имя" />
    //             <Input value={last_name} setValue={setLastName} type="text" placeholder="Фамилия"/>
    //             <Input value={email} setValue={setEmail} type="text" placeholder="Email"/>
    //             <Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
    //             <button className={s.authorization__btn} onClick= {() => registrathionApi(name,last_name, email, password )}   >Отправить</button>
    //     </div>
    // );

    return(
        <form onSubmit = {props.handleSubmit}>
            <div className={s.authorization}>
                <div className={s.authorization__header}>Регистрация</div>
                <Field name = "name" component ={Input} validate={[required, maxLength50]} type="text" placeholder="Имя" />
                <Field name = "last_name" component ={Input} validate={[required, maxLength50]} type="text" placeholder="Фамилия"/>
                <Field name = "email" component ={Input} validate={[required, maxLength50]} type="text" placeholder="Email"/>
                <Field name = "password" component ={Input} validate={[required, maxLength50]} type="password" placeholder="Password"/>
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
