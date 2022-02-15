import React from 'react';
import task from '../utils/task.json';
import s from './task.module.css';
import {NavLink} from 'react-router-dom';
import {setTask} from '../../reducers/taskReducer';
import {useDispatch} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


const Task = () => {

    const dispatch = useDispatch();
   
    return (
            <div className={s.container} >
                <h2 className={s.container__title}>Доступные задания</h2>
                { task.map((task) =>{
                    return (
                        <NavLink key={task.id} onClick={()=> 
                            dispatch(setTask(task.id, task.title))} 
                            title={task.title} to={{
                            pathname: 'taskForm'}}>
                        <div className={s.item} key={task.id}>
                        <p className={s.item__title}>#{task.id} {task.title}</p>
                    </div></NavLink>
                    )})}
            </div>
    )
}

const withRedirect = withAuthRedirect(Task);

export default 
compose(withRedirect);
