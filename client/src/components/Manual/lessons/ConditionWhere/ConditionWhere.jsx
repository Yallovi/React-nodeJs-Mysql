import React from 'react';
import { useSelector } from 'react-redux';
import s from '../literals/literals.module.css';
import manual from '../../../utils/manual.json';
import { NavLink } from 'react-router-dom';
import Footer from '../../../main-screen/footer/Footer'


export default function ConditionWhere() {

  const itemTitle = useSelector(state => state.manualReducer.itemTitle);
  console.log('itemTitle: ', itemTitle);
  
  const theory = useSelector(state => state.manualReducer.theory);
  console.log('theory: ', theory);  

  return (
  <div className={s.main}>
  <div className={s.container}>
      <div className={s.content}>
      <div className={s.container__title}>
        <h2 className={s.container__title}> Условия выборки</h2>
      </div>
      <p>Для решения некоторых задач условие отбора (WHERE) может иметь сложную структуру. Для построения таких условий используют логические операторы AND, OR, NOT и некоторые другие возможности языка SQL. Для группировки условий используются разделительные скобки («(» и «)»).</p>
        <p>1.	Для сравнения выражений предусмотрены: равенство '(«=»)'; больше или равно  "{'>='}" , меньше или равно  "{'<='}" , не равно ( "{'<>'}" «!=»). Например, выборка значений атрибута "content" из таблицы "news", в строках которой значение атрибута "id" меньше 42, осуществляется следующим образом: </p>
      <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE</span> `id`  "{'>'}" 42 <br />
           </p>
        </div>
        <p>2.	Логическое умножение (И) записывается как AND и используется, когда требуется одновременное выполнение двух и более условий. Пример выборки значений атрибута "content" из таблицы "news", в строках которой значение атрибута "id" больше 21 и меньше 42:</p>
        


        <p>Например, для выборки всех значений всех атрибутов из таблицы "news" достаточно ввести следующую команду:</p>

      <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE</span> `id` {'>'} 21 AND `id` {'<'} 42;</p>
        </div>
        <p>3.	Логическое сложение (ИЛИ) записывается как OR и используется, когда требуется, чтобы выполнялось хотя бы одно из нескольких условий. Пример выборки значений атрибута "content" из таблицы "news", в строках которой значение атрибута "id" больше 21 или меньше 10:
        </p>
        <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE</span> `id` {'>'} 21 OR `id` {'<'} 42;</p>
        </div>
        <p>Логическое сложение имеет меньший приоритет чем логическое умножение, поэтому для корректной записи логических формул может потребоваться использование разделяющих скобок. Пример выборки значений атрибута "content" из таблицы "news", в строках которой значение атрибута "id" либо больше 21 и меньше 42, либо больше 84:</p>
        <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE</span> (`id` {'>'} 21 AND `id` {'<'} 42) OR `id {'>'} 84`</p>
        </div>
        <p>4.	Логическое отрицание (НЕ) записывается как NOT и используется для инвертирования последующего условия. Например, выборку значений атрибута "content" из таблицы "news", в строках которой значение атрибута "id" меньше 21 или больше 42, можно осуществить так:</p>
        <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE NOTE</span> (`id` {'>'} 21 AND `id` {'<'} 42)</p>
        </div>
        <p>
        5.	Если у атрибута отсутствует значение, то оно записывается как NULL (NULL — символ отсутствия значения, что не путать с пустым значением: пустое значение существует, а NULL указывает на его отсутствие). Для составления условий на выборку подобных отсутствующих значений предусмотрено специальное выражение IS NULL. Пример выборки значений атрибута "content" из таблицы "news", в строках которой значение атрибута "author" отсутствует:
        </p>
        <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE </span> `author` <span>IS NULL</span> </p>
        </div>
        <p>
        6.	Для указания принадлежности значения атрибута какому-либо интервалу предусмотрено выражение BEETWEEN .. AND. Выражение "BETWEEN a AND b". Пример выборки значений атрибута "content" из таблицы "news", в строках которой значение атрибута "id" больше 21 и меньше 42:
        </p>
        <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE </span> `id` <span>BETWEEN</span> 21 AND 42; </p>
        </div>  
        <p>7.	Для указания принадлежности значения атрибута какому-либо множеству предусмотрено выражение IN. Пример выборки значений атрибута "content" из таблицы "news", в строках которой значение атрибута "id" принимает значения 21, 42, 84 или 168:</p>
        <div className={s.definition}>
           <p> <span>SELECT</span> `content` <span>FROM</span> `news` <span>WHERE </span> `id` <span>IN</span>(21, 42, 84, 168); </p>
        </div> 
        <p>8.	Для поиска строковых значений, содержащих заданную строку по шаблону, предусмотрена выражение LIKE. В качестве аргумента оператору LIKE передается шаблон в виде строки, в которой помимо текста могут содержаться метасимволы «_» (обозначает любой одиночный символ) и «%» (набор любых символов любой длины). Пример выборки значений атрибута "content" из таблицы "news", в строках которой значение атрибута "author" соответствует шаблону «_user%» (т.е. строка, которая строится как любой символ + user + любая последовательность символов):</p>
        <p>Такому шаблону будут удовлетворять значения атрибута вроде «1user», «1user222», «xuser42» и т.д.</p>
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

