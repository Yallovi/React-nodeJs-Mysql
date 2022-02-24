import React from 'react'
import s from './advantages.module.css'

const Advantages = () => {
  return (
    <section className={s.advantages}>
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.description}>
                    <h2>SQL — один из основных языков в арсенале дата-сайентистов и аналитиков. Со знанием SQL можно работать во многих сферах: телекоме, финтехе, ритейле и создании мобильных сервисов</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advantages