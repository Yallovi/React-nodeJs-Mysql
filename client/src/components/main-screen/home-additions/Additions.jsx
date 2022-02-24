import React from 'react'
import s from './additions.module.css'
import frame from '../../../assets/image/Frame.svg'

const Additions = () => {
  return (
    <section className={s.section}>
        <div className={s.section__title}>
            <div className={s.container}>
            <h2>Для управления базами данных <br /> <span>нужны специальные <br/> системы </span></h2>

                <div className={s.content}>

                    <div className={s.description}>
                        <p>Системы управления базами данных — это комплекс программ, с помощью которых можно создавать базы данных и проводить над ними различные операции: обновлять, удалять, выбирать, редактировать. <br /> <br />
                            Такие системы обеспечивают безопасность данных и позволяют автоматизировать работу, и чтобы работать с ними, нужно знать SQL. На курсе вы познакомитесь с двумя системами: PostgreSQL и MongoDB.</p>
                    </div>

                    <div className={s.content_image}>
                        <img src={frame} alt="" />
                    </div>
        
                </div>
            </div>
        </div>
    </section>
  )
}

export default Additions