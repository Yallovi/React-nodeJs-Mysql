import React from 'react';
import { useSelector } from 'react-redux';
import s from '../literals/literals.module.css';
import manual from '../../../utils/manual.json';
import { NavLink } from 'react-router-dom';
import Footer from '../../../main-screen/footer/Footer'


export default function GroupingResults() {

  const itemTitle = useSelector(state => state.manualReducer.itemTitle);
  console.log('itemTitle: ', itemTitle);
  
  const theory = useSelector(state => state.manualReducer.theory);
  console.log('theory: ', theory);  

  return (
  <div className={s.main}>
  <div className={s.container}>
      <div className={s.content}>
      <div className={s.container__title}>
        <h2 className={s.container__title}> Числовые операции (агрегирующие функции)</h2>
      </div>
        <p>Для разбиения результатов выборки по группам используется оператор GROUP BY. Разбиение строк по группам бывает необходимо для проведения каких-либо операций не над всеми строками по отдельности, а над группами, отобранными по какому-либо атрибуту и условию.</p>
        <p>Группировка производится по указываемому атрибуту (или набору атрибутов), и строки распределяются по группам в соответствии со значением атрибута в этой строке (каждую группу образует набор строк с одним значением атрибута, по которому производится группировка).</p>
        <p>Пример выборки значений всех атрибутов таблицы "news" с группировкой по атрибуту "author":</p>
      <div className={s.definition}>
           <p> <span>SELECT </span> (`id`) <span>FROM</span> `news` <span>GROUP BY</span>  `author`;
           </p>
        </div>
        <p>С помощью группировки можно, например, посчитать количество новостей, добавленных каждым автором:</p>
        <div className={s.definition}>
           <p> <span>SELECT</span> `author`, <span>COUNT(*)</span> <span>FROM</span> `news` <span>GROUP BY</span> `author`;
           </p>
        </div>
        <p>Для добавления условий на результат группировки в конструкцию GROUP BY добавляют выражение HAVING, работающее по аналогии с WHERE, но с группами строк.</p>
        <p>Например, к прошлому запросу с помощью HAVING можно добавить условие, по которому будут выводиться только те авторы, которые добавили более 3 новостей:</p>
            <div className={s.definition}>
           <p>
           <span>SELECT</span> `author`, <span>COUNT(*) AS</span> `cnt` <span>FROM</span> `news` <span>GROUP BY</span> `author` <span>HAVING</span> `cnt` {">"} 3;
           </p>
        </div>
    </div>
      <div className={s.navigation}>


        {/* Правый Navbar */}
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
    <Footer />
  </div>
 )
}

