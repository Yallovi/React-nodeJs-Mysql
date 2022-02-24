import React from 'react'
import s from './Offer.module.css';
import item_1 from '../../../assets/image/item_1.svg';
import item_2 from '../../../assets/image/item_2.svg';
import item_3 from '../../../assets/image/item_3.svg';
import item_4 from '../../../assets/image/item_4.svg';


const Offer = () => {
  return (
    <section className={s.section}>
            <h2 className={s.container__title}>Кому будет  <span className={s.title_other_style}>полезен курс</span></h2>
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.content__items}>

                    <div className={s.item}>
                        <div className={s.image}>
                            <img src={item_1} alt="" />
                            <div className={s.item__content}>
                                <div className={s.item__title}>
                                    <h2>Новичкам в аналитике</h2>
                                </div>
                                <div className={s.item__description}>
                                    <p>Узнаете, как самостоятельно извлекать данные для обработки и анализа. Улучшите свои навыки и сможете получить повышение</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.item}>
                        <div className={s.image}>
                            <img src={item_2} alt="" />
                            <div className={s.item__content}>
                                <div className={s.item__title}>
                                    <h2>Маркетологам</h2>
                                </div>
                                <div className={s.item__description}>
                                    <p>Научитесь оперативно получать данные, чтобы оценивать результаты, строить гипотезы и разрабатывать маркетинговые стратегии</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.item}>
                        <div className={s.image}>
                            <img src={item_3} alt="" />
                            <div className={s.item__content}>
                                <div className={s.item__title}>
                                    <h2>Менеджерам проектов и продуктов</h2>
                                </div>
                                <div className={s.item__description}>
                                    <p>Сможете лучше понимать разработчиков и аналитиков и самостоятельно выгружать данные</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.item}>
                        <div className={s.image}>
                            <img src={item_4} alt="" />
                            <div className={s.item__content}>
                                <div className={s.item__title}>
                                    <h2>Финансистам, бухгалтерам и научным сотрудникам</h2>
                                </div>
                                <div className={s.item__description}>
                                    <p>Научитесь выгружать данные и изучать их характеристики с помощью аналитических функций SQL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Offer