import React from 'react';
import { useSelector } from 'react-redux';
import s from '../literals/literals.module.css';
import manual from '../../../utils/manual.json';
import { NavLink } from 'react-router-dom';
import Footer from '../../../main-screen/footer/Footer'


export default function NumericOperation() {

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
        <p>1.	Для получения среднего арифметического значения атрибута по всем результирующим строкам предусмотрена функция AVG(). В качестве единственного аргумента ей передается название атрибута, значения которого будут учитываться. Пример выборки для нахождения среднего значения идентификатора ("id") новости:</p>
      <div className={s.definition}>
           <p> <span>SELECT AVG</span> (`id`) <span>FROM</span> `news`;
           </p>
        </div>
        <p>2.	Для поиска минимального и максимального значений атрибута среди всех результирующих строк есть функции MIN() и MAX() соответственно. В качестве единственного аргумента им передается название атрибута, значения которого будут учитываться. Пример выборки для нахождения минимального и максимального значений идентификатора ("id") новости</p>
        <div className={s.definition}>
           <p> <span>SELECT MIN</span> (`id`), <span>MAX</span> (`id`) <span>FROM</span> `news`;
           </p>
        </div>
        <p>3.	Для подсчета суммы числовых значений атрибута среди всех результирующих строк предусмотрена функция SUM(). В качестве единственного аргумента ей передается название атрибута, значения которого будут учитываться. Пример выборки для нахождения суммы значений идентификаторов ("id") всех новостей:</p>
            <div className={s.definition}>
           <p> <span>SELECT SUM</span> (`id`) <span>FROM</span> `news`;
           </p>
        </div>
        <p>4.	Для подсчета количества строк выборки предусмотрена функция COUNT(). В качестве единственного аргумента ей передается название атрибута, значения которого будут учитываться. Кроме того, поскольку обычно не важно, по какому атрибуту считать число результирующих строк, вместо названия атрибута в качестве аргумента может использоваться метасимвол звездочки («*»). Пример выборки для нахождения количества строк в таблице "news":</p> 
        <div className={s.definition}>
           <p> <span>SELECT COUNT</span> (*) <span>FROM</span> `news`;
           </p>
        </div>
        <p>Дополнительный параметр DISTINCT, указанный перед названием атрибута, позволяет вычесть из результата все вхождения по повторяющимся значениям выбранного поля. Пример выборки для нахождения количества новостей, написанных разными авторами:</p>
        <div className={s.definition}>
           <p> <span>SELECT COUNT</span> (<span>DISTINCT</span> `author` <span>FROM</span> `news`;
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

