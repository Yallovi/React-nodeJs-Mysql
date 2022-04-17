import React from 'react';
import task from '../utils/task.json';
import s from './task.module.css';
import {NavLink} from 'react-router-dom';
import {setTask} from '../../reducers/taskReducer';
import {useDispatch, useSelector} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import lock from '../../assets/image/lock.png'
import Footer from '../main-screen/footer/Footer';


const Task = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const dispatch = useDispatch();
    const styles ={
        message:{
            marginBottom: `30px`,
            color: `red`
        }, 
        lock: {
            width: `20px`,
            height: `20px`
        }
    }

    return (
        <div>
            <div className={s.container} >
                <h2 className={s.container__title}>Доступные задания</h2>
                {isAuth === false ? <div style={styles.message}>Чтоб Разблакировать все уроки войдите в аккаунт </div> : null}
                <div className={s.Mb}>
                { task.map((task, index) =>{
                    return (
                        <div>
                            <NavLink key={task.id} onClick={()=>  
                            dispatch(setTask(task.id, task.title))} 
                            title={task.title} to={{
                                pathname: isAuth === false && index >= 2 ? 'task' : 'taskForm'}}>
                        <div  className={isAuth === false && index >=2 ? s.isAuthItem : s.item} key={task.id}>
                        <p className={s.item__title}>#{task.id} {task.title}</p>
                        {isAuth === false && index >=2 &&(
                            <div ><img style={styles.lock} src={lock} alt="" /></div>
                            )}
                    </div></NavLink>
                        </div>
                    )})}
                </div>
            
            </div>
            <Footer/>
        </div>    
            
    )
}

const withRedirect = withAuthRedirect(Task);

export default 
compose(withRedirect);
