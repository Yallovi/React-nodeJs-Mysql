import React from 'react';
import s from './manual.module.css';
import manual from '../utils/manual.json';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setManual} from '../../reducers/manualReducer';

export default function Manual() {
    const dispatch = useDispatch();
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
                {manual.map((manual) =>{
                        return(
                            <div key={manual.id} className={s.content}>
                                <div className={s.chapter}>
                                    <div className={s.label}>
                                        <span className={s.number}>{manual.chapterNumber}</span>
                                        <span className={s.chapter__title}> {manual.chapterTitle}</span>
                                    </div>
                                    <div className={s.items}>
                                        <div className={s.item}>
                                            <span className={s.number}>{manual.itemNumber}</span>
                                            <span className={s.item__title}>
                                                <NavLink to='manualChapter' onClick={()=>dispatch(setManual(manual.itemTitle, manual.theory))}
                                                >
                                                    {manual.itemTitle}</NavLink>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})}
            </div>
        </div>
    </div>
  )
}
