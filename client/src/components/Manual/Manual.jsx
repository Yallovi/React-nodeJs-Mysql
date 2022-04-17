import React from 'react';
import s from './manual.module.css';
import manual from '../utils/manual.json';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setManual} from '../../reducers/manualReducer';
import lock from '../../assets/image/lock.png'
import Footer from '../main-screen/footer/Footer';



export default function Manual() {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const dispatch = useDispatch();
    const styles ={
        message:{
            marginBottom: `30px`,
            marginTop: `30px`,
            color: `red`
        }, 
        lock: {
            width: `20px`,
            height: `20px`
        }
    }

  return (
    <div className={s.container}>
        <div className={s.container__title}>
            <h1 className={s.title}>Интерактивный учебник по SQL</h1>
        </div>
        <div className={s.block_navigation}>
            <div className={s.section}>
                <div className={s.section__title}>Язык SQL</div>
                <div className={s.description}>
                    <p>В данном разделе учебника использовались наиболее общие подходы к написанию SQL запросов. Особенности конкретных СУБД будут описаны в других разделах.</p> 
                </div>

                {isAuth === false ? <div style={styles.message}>Чтоб Разблакировать все уроки войдите в аккаунт </div> : null}

                {manual.map((manual, index) =>{
                        return(
                            <div key={manual.id} className={s.content}>
                                <div className={s.chapter}>
                                    <div className={isAuth === false && index >=2 ? s.labelIsAuth :s.label}>
                                        <span className={s.number}>{manual.chapterNumber}</span>
                                        <span className={s.chapter__title}> {manual.chapterTitle}</span>
                                    </div>
                                    <div className={isAuth === false && index >=2 ? s.isAuthItems : s.items}>
                                        <div className={ s.item}>
                                            <span className={s.number}>{manual.itemNumber}</span>
                                            <span className={s.item__title}>
                                                <NavLink to={isAuth === false && index >= 2 ? 'manual' : 'manualChapter'} onClick={()=>dispatch(setManual(manual.itemTitle, manual.theory))}
                                                >
                                                    {manual.itemTitle}</NavLink>
                                            </span>
                                            {isAuth === false && index >=2 &&(
                                                <div ><img style={styles.lock} src={lock} alt="" /></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})}
            </div>
        </div>
        <Footer />
    </div>
  )
}
