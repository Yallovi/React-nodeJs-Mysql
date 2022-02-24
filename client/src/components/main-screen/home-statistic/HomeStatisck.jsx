import React from 'react'
import s from './style.module.css';

function HomeStatisck() {
  return (
    <div className={s.home__statisck}>
        <div className={s.wrapper}>
           
                <div className={s.statisck__item_1}>
                    <div className={s.number}>100 000+</div>
                    <div className={s.description}>опробовали тренажер</div>
                </div>
                <div className={s.statisck__item_2}>
                    <div className={s.number}>50+</div>
                    <div className={s.description}>открытых упражнений</div>
                </div>
           
        </div>
    </div>
  )
}

export default HomeStatisck