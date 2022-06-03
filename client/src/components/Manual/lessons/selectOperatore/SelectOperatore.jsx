import React from 'react';
import { useSelector } from 'react-redux';
import s from './SelectOperatore.module.css';
import manual from '../../../utils/manual.json';
import { NavLink } from 'react-router-dom';
import Footer from '../../../main-screen/footer/Footer'


export default function SelectOperatore() {

  const itemTitle = useSelector(state => state.manualReducer.itemTitle);
  console.log('itemTitle: ', itemTitle);
  
  const theory = useSelector(state => state.manualReducer.theory);
  console.log('theory: ', theory);  

  return (
  <div className={s.main}>
  <div className={s.container}>
      <div className={s.content}>
      <div className={s.container__title}>
        <h2 className={s.container__title}> О выборке</h2>
      </div>
      <p>Для получения значений атрибутов таблиц БД используется команда SELECT. Общий вид команды представляется следующим образом:</p>
      <div className={s.definition}>
           <p> <span>SELECT</span> `my_field1`, `my_field2`, ..., `my_fieldN` <br />
           <span>FROM</span> `my_table` <br />    
           <span>WHERE</span> условие;
           </p>
        </div>
        <p>Здесь:</p>
        <li>my_field1, my_field2 и т.д — это перечисление названий атрибутов, значения которых мы "выбираем", т.е. в результирующей таблице будут выведены только значения указанных атрибутов. В случае, если требуется вывод значений всех атрибутов результирующей таблицы, для упрощения записи запроса используется символ звездочки («*»).</li>
        <li>my_table — это название таблицы, из которой будет сделана выборка.</li>
        <li>Yсловие WHERE может иметь сложную структуру или отсутствовать.</li>


        <p>Например, для выборки всех значений всех атрибутов из таблицы "news" достаточно ввести следующую команду:</p>

      <div className={s.definition}>
           <p> <span> SELECT </span> *  <span>FROM</span> `news`;</p>
        </div>
        <p>При выполнении запроса в оперативной памяти создается виртуальная таблица, состоящая из всех данных, удовлетворяющих условию отбора, а исходная таблица при этом никак не изменяется.
        </p>
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

