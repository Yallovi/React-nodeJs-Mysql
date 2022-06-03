import React, { useState } from 'react'
import s from './privateOffice.module.css'
import circle from '../../assets/image/circle-image.png'
import Footer from '../main-screen/footer/Footer';
import { useForm } from "react-hook-form";
import { authApi } from "../../api/api"
import Alert from '../hooks/useAlert'
import { compose } from 'redux';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {useDispatch, useSelector} from 'react-redux';
import {setProgress} from "../../reducers/taskReducer";


const PrivateOffice = (props) => {
    console.log('props',props)
    const dispatch = useDispatch();

    const [alertSuccess, setAlertSuccess] = useState()
    const [alertError, setAlertError] = useState()

    console.log(alert)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    const { name, last_name, status } = data
        authApi.privateOffice(name, last_name, status)
        .then(data => {
            console.log(data)

            if(data.status === 200){
                setAlertSuccess(true)
            }
            else {
                setAlertError(true)
            }
        })
    }
    const [messageProgress, setMessageprogress] = useState()
    const handleGetprogress = () => {
        authApi.getProgress(props.userId)
            .then(data => {
                console.log('data =>', data)
                if (data?.data?.values?.results.length === 0){
                    setMessageprogress(true)
                }else {
                    setMessageprogress(false)
                    dispatch(setProgress(data?.data?.values?.results))
                }
            })
    }

console.log(props.progress)
  return (
    <>
    <div className={s.main_block}>
          <div className={s.circle_image}>
              <img src={circle} alt="" />
          </div>
          <button className={s.circle_image__button}>Загрузить фотографию</button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.block_form}>
                <div>
                    <div className={s.block_label_form}>Имя</div>
                    <input className={s.block_input_form} placeholder="имя" {...register('name')}/>
                </div>
                <div>
                    <div className={s.block_label_form}>Фамилия</div>
                    <input className={s.block_input_form} type="text" placeholder="фамилия" {...register('last_name')}/> 
                </div>
                <div>
                    <div className={s.block_label_form}>Статус</div>
                    <input className={s.block_input_form} type="text" placeholder="Статус" {...register('status')}/>
                </div>
            </div>
            <input type="submit" className={s.circle_image__button} value={'Сохранить изменения'} />
          </form>
          {alertSuccess ?  <Alert type="success" message="Success" /> : null}
         {alertError ? <Alert type="error" message="Error" /> : null}

          <div className={s.progress_block}>
          <h2 className={s.progress_title}>Статистика пройденных уроков</h2>
          <button className={s.circle_image__button}
            onClick={handleGetprogress}
          >Получить статистику</button>

          {!!messageProgress && <span className={s.progress_reject}>Вы не прошли еще ни одного урока :( </span>}
          {!!props.progress.length && <div className={s.progress_success}>Вы молодец! Нужно постараться еще  </div>}
          <div className={s.progress_descr}>
              <table>
                  <tr>
                      <th>Номер урока</th>
                      <th>Задание урока</th>
                  </tr>
                  {props.progress.map((currProgress, index) => {
                     return <tr key={index}>
                      <td>{currProgress.lessonId}</td>
                      <td>{currProgress.lessonTask}</td>
                    </tr>
                  })}
                    {/* <tr>
                      <td>{props.lessonId}</td>
                      <td>{props.lessonTask}</td>
                    </tr> */}
                    {/* <tr>
                    <td>{2}</td>
                      <td>Вывести авторов из таблицы Authors</td>
                    </tr>
                    <tr>
                      <td>{3}</td>
                      <td>Вывести наименование книг из таблицы Books </td>
                    </tr> */}
              </table>

          </div>

      </div>
      </div>
      <div className={s.margin}>123</div>
      </>
  )
}

const mapStateToProps = (state) => {
    return{
        userId: state.authReducer.currentUser?.userId,
        progress: state.taskReducer.progress
    }
}


const withRedirect = withAuthRedirect(PrivateOffice);

export default  compose(connect(mapStateToProps)) (withRedirect) 