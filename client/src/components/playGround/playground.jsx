import React, {useState} from 'react';
import s from './playground.module.css';
import{Field, reduxForm} from 'redux-form';
import { Textarea } from '../../common/FormsControll/FormsControls';
import {connect} from 'react-redux';
import {sendRequest} from '../../reducers/taskReducer';
import {setTask} from '../../reducers/taskReducer';
import {useDispatch, useSelector} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import lock from '../../assets/image/lock.png'
import Footer from '../main-screen/footer/Footer';
import { authApi } from '../../api/api';
import {setStatusCode} from '../../reducers/taskReducer'

 

const Playground = (props) => {
    const dispatch = useDispatch();
    const [] = useState(() =>{
        const savedTitle = localStorage.getItem('title');
        const title = JSON.parse(savedTitle);
        const savedId = localStorage.getItem('id');
        const id = JSON.parse(savedId);
        dispatch(setTask(id, title,));

    });
    console.log('props.statusCode: ', props.statusCode);
    const values = useSelector(state => state.taskReducer.values)
    const messageSuccess =  useSelector(state => state.taskReducer.messageSuccess); 
    
    
    if (props.statusCode === 200) {
        authApi.progress( props.userId, props.id, props.title)
        dispatch(setStatusCode( null,))
    }

    
    const styles ={
        diagram: {
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", 
            borderEadius:"15px"
        }
    }

    return (
        <div>
        <div className={s.containerBlock}>
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
            <div className={values.length ? s.diagramm : s.diagrammTwoVariant}> 
                <iframe width="900x" height="500px" style={styles.diagram} allowtransparency="true" allowfullscreen="true" scrolling="no" title="Embedded DrawSQL IFrame" frameborder="0" src="https://drawsql.app/yallovi/diagrams/diplom/embed"></iframe>
            </div>
        </div>

        <div  className={s.responseBlock}>
                
            <div className={s.wrapperTable}>
            
            {values.length ?
            <table className={s.table_response}>
                <tr>
                    <th>id</th>
                    <th>Author</th>
                    <th>Books</th>
                    <th>Genre</th>
                </tr>
                {values.length ?
                values.map((obj, i) =>{
                return(
                    i < 12 ?
                        
                            <tbody>
                                <tr>
                                    <th key={i}> {obj.id_author} </th> 
                                    <th key={i}> {obj.last_name} <br/> {obj.first_name} <bt/> {obj.patronymic}
                                    </th> 
                                    <th key={i}> {obj.name} <br /> {obj.date} <br/> {obj.descr} </th> 
                                    <th key={i}> {obj.id_genre} <br /> {obj.name_genre} <br/> {obj.description_genre} </th> 

                                </tr>
                            </tbody>
                    : null
                    )
                })
                : ''
            }
            </table>
            : null
            }
            </div>
        
        </div>
        <Footer />
        </div>
    )
}




// export default TaskForm;

const TaskReduxForm = reduxForm({form: 'taskForm'})(Playground);

const Tasks = (props) => {
    const onSubmit = (formData) => {
        
        props.sendRequest(formData.task)
    }

    return <div> 
        <TaskReduxForm statusCode={props.statusCode} userId={props.userId } title={props.title} id={props.id} onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => {
    return{
        id: state.taskReducer.id, 
        title: state.taskReducer.title,
        statusCode: state.taskReducer.statuseCode,
        userId: state.authReducer.currentUser?.userId
    }
}

const withRedirect = withAuthRedirect(Tasks);

export default compose (connect(mapStateToProps, {sendRequest}) (withRedirect));
// export default(TaskReduxForm);