import React, { useState } from 'react'
import s from './privateOffice.module.css'
import circle from '../../assets/image/circle-image.png'
import Footer from '../main-screen/footer/Footer';
import { useForm } from "react-hook-form";
import { authApi } from "../../api/api"
import Alert from '../hooks/useAlert'



const PrivateOffice = (props) => {
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
      </div>
      {alertSuccess ?  <Alert type="success" message="Success" /> : null}
      {alertError ? <Alert type="error" message="Error   " /> : null}
      </>
  )
}

export default PrivateOffice