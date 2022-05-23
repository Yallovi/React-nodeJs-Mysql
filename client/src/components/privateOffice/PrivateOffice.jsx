import React from 'react'
import s from './privateOffice.module.css'
import circle from '../../assets/image/circle-image.png'
import Footer from '../main-screen/footer/Footer';

const PrivateOffice = () => {
  return (
    <><div className={s.main_block}>
          <div className={s.circle_image}>
              <img src={circle} alt="" />
          </div>
          <button className={s.circle_image__button}>Загрузить фотографию</button>
          <div className={s.block_form}>
              <div>
                  <div className={s.block_label_form}>Имя</div>
                  <input className={s.block_input_form} type="text" placeholder="имя" />
              </div>
              <div>
                  <div className={s.block_label_form}>Фамилия</div>
                  <input className={s.block_input_form} type="text" placeholder="фамилия" />
              </div>
              <div>
                  <div className={s.block_label_form}>Статус</div>
                  <input className={s.block_input_form} type="text" placeholder="Статус" />
              </div>
          </div>
          <button className={s.circle_image__button}>Сохранить</button>
      </div>
      {/* <Footer /> */}
      </>
  )
}

export default PrivateOffice