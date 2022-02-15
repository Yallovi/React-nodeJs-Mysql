import React from 'react';
import { useSelector } from 'react-redux';
import s from './manualChapter.module.css';
import manual from '../utils/manual.json';
import { NavLink } from 'react-router-dom';


export default function ManualChapter() {

  const itemTitle = useSelector(state => state.manualReducer.itemTitle);
  const theory = useSelector(state => state.manualReducer.theory);
  // console.log(itemTitle);
  // console.log(theory);
  return <main>
    <div className={s.container__title}>
        <h1>{itemTitle}</h1>
      </div>
  <div className={s.container}>
      <div className={s.content}>
        {theory}
      </div>
      <div className={s.navigation}>
        <div className={s.navigation__title}>Навигация по разделам</div>
        <div className={s.navigation__item}>
          {
            manual.map((m) =>{
              return(
                <div>
                  <div className={s.label}>
                    <span className={s.chapter__title}> {m.chapterTitle}</span>
                  </div>
                  <div className={s.items}>
                    <div className={s.item}>
                        <span className={s.number}>{m.itemNumber}</span>
                          <span className={s.itemTitle}>
                            <NavLink to="#"> {m.itemTitle} </NavLink>
                          </span>
                      </div>
                    </div>
                </div>
                
              )
            })
          }
        </div>
      </div>
    </div>;
  </main>
 
}
