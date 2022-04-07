import React, {useState} from 'react';
import s from './task.module.css';
import{Field, reduxForm} from 'redux-form';
import { Textarea } from '../../common/FormsControll/FormsControls';
import {connect} from 'react-redux';
import {sendRequest} from '../../reducers/taskReducer';
import {setTask} from '../../reducers/taskReducer';
import {useDispatch, useSelector} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

 

const TaskForm = (props) => {
    const dispatch = useDispatch();
    const [] = useState(() =>{
        const savedTitle = localStorage.getItem('title');
        const title = JSON.parse(savedTitle);
        const savedId = localStorage.getItem('id');
        const id = JSON.parse(savedId);
        dispatch(setTask(id, title,));

    });

    const values = useSelector(state => state.taskReducer.values);
    const messageSuccess =  useSelector(state => state.taskReducer.messageSuccess);  

    return (
        <div>
        <div className={s.containerBlock}>
            <div className={s.taskBlock}>
                <h3 className={s.taskBlock__title}>Задание {props.id}</h3>
                <div className={s.taskInfo}>
                    <p>{props.title}</p>   
                </div> 
            </div>

            <div className={s.formContent}>
                <div className={s.form_block}>
                    <form onSubmit={props.handleSubmit}>
                        <div >
                            <Field name="task" component={Textarea} type="text" placeholder="Введите ваш запрос ..." /> 
                            <div className={s.resultBlock}>
                            {
                                props.error && 
                                <span className = {s.formSummaryError}>
                                    {props.error}
                                </span>
                            }
                            <button  className={s.formBtn}> Отправить</button>
                            </div>
                        </div>
                    </form>
                </div>
                {
                    <span className = {s.formSummarySuccess}>{messageSuccess}</span>
                } 
            </div>
            
        </div>
            <div  className={s.responseBlock}>
                {values.length ?
                values.map((obj, i) =>{
                    return(
                        <table className={s.table} key={i}>
                            <tbody>
                                <tr>
                                    <th key={i}> {obj.name} </th> 
                                </tr>
                            </tbody>
                        </table>
                    )
                })
                : ''
            }
            

        </div>
        </div>
    )
}




// export default TaskForm;

const TaskReduxForm = reduxForm({form: 'taskForm'})(TaskForm);

const Tasks = (props) => {
    const onSubmit = (formData) => {
        props.sendRequest(formData.task)
    }

    return <div> 
        <TaskReduxForm title={props.title} id={props.id} onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => {
    return{
        id: state.taskReducer.id, 
        title: state.taskReducer.title,
    }
}

const withRedirect = withAuthRedirect(Tasks);

export default compose (connect(mapStateToProps, {sendRequest}) (withRedirect));
// export default(TaskReduxForm);