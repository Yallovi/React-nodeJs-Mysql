import React from 'react'
import Shedule from '../../../assets/image/Schedule.svg';
import s from './Main.module.css';

export const MainPractics = () => {
  return (
    <section>
        <div className={s.home_features}>
            <div className={s.wrapper}>
              <div className={s.animated_slideInUp}>
                <div className={s.features_item}>
                    {/* <div></div>  */}
                    <div className={s.main}>
                      <h2>Приближено к практике</h2>
                      <div className={s.description}>
                      Мы используем в упражнениях базы данных, приближенные к реальным, затрагиваем большинство операторов и выражений, которые могут пригодиться вам в дальнейшей карьере.
                      </div>
                    </div>
                    <div className={s.image}>
                      <img src={Shedule} alt="" />
                    </div>
                </div>
              </div>
            </div>
          </div> 
    </section>
)
}
