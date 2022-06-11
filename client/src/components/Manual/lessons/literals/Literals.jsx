import React from 'react';
import { useSelector } from 'react-redux';
import s from './literals.module.css';
import manual from '../../../utils/manual.json';
import { NavLink } from 'react-router-dom';
import Footer from '../../../main-screen/footer/Footer'
import LiteralTest from '../LessonTest/LiteralTest';

export default function Literals() {

  const itemTitle = useSelector(state => state.manualReducer.itemTitle);
  console.log('itemTitle: ', itemTitle);
  
  const theory = useSelector(state => state.manualReducer.theory);
  console.log('theory: ', theory);  

  return (
  <div className={s.main}>
  <div className={s.container}>
      <div className={s.content}>
      <div className={s.container__title}>
        <h2 className={s.container__title}>Литералы в SQL</h2>
      </div>
      <p>Литерал — указанное явным образом фиксированное значение, например, число 12 или строка "SQL". В MySQL существуют следующие типы литералов: числовой, строковый, логический, NULL, битовый, шестнадцатеричный и литерал даты и времени.</p>
        <h2 className={s.container__title}>Числовые литералы</h2>
        <div><div ><table><thead><tr><th align="left"></th><th align="left">Пример</th></tr></thead><tbody><tr><td align="left">Включает в себя целые и дробные числа. Разделительный знак для дробного числа — «.» (точка).</td><td align="left">1, 2.9, 0.01</td></tr><tr><td align="left">Может иметь только целую, дробную часть или обе сразу.</td><td align="left">.2, 1.1, 10</td></tr><tr><td align="left">Может быть положительным и отрицательным числом (для положительного число совсем не обязательно указывать знак).</td><td align="left">+1, -10, -2.2</td></tr><tr><td align="left">Могут быть представлены в экспоненциальном виде.</td><td align="left">1e3 (то же самое, что и 1000), -1e-3 (-0.001)</td></tr></tbody></table></div><div><div ></div></div><div ><div></div></div></div>
        <h2 className={s.container__title}>Арифметические операторы</h2>
        <p>В SQL есть все привычные нам арифметические операторы:</p>

        <div>
        <table><thead><tr><th align="center">Оператор</th><th align="left">Описание</th><th align="left">Пример</th></tr></thead><tbody><tr><td align="center"><span class="sql-code sql-code-line sql-code-line--blue-color ">%</span>, <span class="sql-code sql-code-line sql-code-line--blue-color ">MOD</span></td><td align="left">Деление по модулю</td><td align="left"><span class="sql-code sql-code-line sql-code-line--blue-color ">11 % 5 = 1</span></td></tr><tr><td align="center"><span class="sql-code sql-code-line sql-code-line--blue-color ">*</span></td><td align="left">Умножение</td><td align="left"><span class="sql-code sql-code-line sql-code-line--blue-color ">10 \* 16 = 160</span></td></tr><tr><td align="center"><span class="sql-code sql-code-line sql-code-line--blue-color ">+</span></td><td align="left">Сложение</td><td align="left"><span class="sql-code sql-code-line sql-code-line--blue-color ">98 + 2 = 100</span></td></tr><tr><td align="center"><span class="sql-code sql-code-line sql-code-line--blue-color ">-</span></td><td align="left">Вычитание</td><td align="left"><span class="sql-code sql-code-line sql-code-line--blue-color ">50 - 51 = -1</span></td></tr><tr><td align="center"><span class="sql-code sql-code-line sql-code-line--blue-color ">/</span></td><td align="left">Деление</td><td align="left"><span class="sql-code sql-code-line sql-code-line--blue-color ">1 / 2 = 0.5</span></td></tr><tr><td align="center"><span class="sql-code sql-code-line sql-code-line--blue-color ">DIV</span></td><td align="left">Целочисленное деление</td><td align="left"><span class="sql-code sql-code-line sql-code-line--blue-color ">10 DIV 4 = 2</span></td></tr></tbody></table>
        </div>

        <p>Используя эти операторы можно построить любое арифметическое выражение, применяя стандартные правила арифметики.</p>
        <h2 className={s.container__title}>Строковые литералы</h2>
        <div>
            <p>Строка — это последовательность символов, заключённых в одинарные (') или двойные (") кавычки. Набор символов, из которых может состоять строка, определяется самой СУБД. Примеры строк: 'это строка', "и это строка".

Строки могут содержать специальные последовательности символов, начинающиеся с "\" (экранирующий символ). Они нужны для того, чтобы СУБД придала обычным символам (буквам и другим знакам) новое особое значение. Например, последовательность "\n" буквально означает "перевод строки", а без предваряющего слеша это была бы обычная буква "n".</p>
        </div>

        <h2 className={s.container__title}>Литералы даты и времени</h2>
        <p>Значения даты и времени могут быть представлены в формате строки или числа. Например, в случае, когда СУБД ожидает дату (если в таблице указано поле с типом "Дата"), строка "2020-01-01", "20200101" и число 20200101 будут интерпретироваться как "1 января 2020 года". В ином случае, необходимо использовать синатксис, описанный ниже.

Необходимо, чтобы временные литералы указывались с использованием определённого типа и строки, формирующей дату.</p>
    
        <h2 className={s.container__title}>Логические литералы</h2>
        <div>
            <p>Логический литерал - значения TRUE и FALSE, означающие истинность и ошибочность какого-либо утверждения. При интерпретации запроса, MySQL преобразует их в числа: TRUE и FALSE становятся 1 и 0 соответственно.</p>
        </div>

        <h2 className={s.container__title}>Битовые литералы</h2>
            <div>
                <p>
                    Например, значение b'01010011' может быть преобразовано в символ "S" или число 76. Из набора битовых значений можно составить какое-нибудь слово, к примеру, конкатенация b'01010011', b'01010001' и b'01001100' даст нам строку "SQL".
               </p>
            </div>

            <h2 className={s.container__title}>NULL</h2>
            <div>
                <p>
                Значение NULL означает "нет данных", "нет значения". Оно нужно, чтобы отличать визуально пустые значения, такие как строка нулевой длины или "пробел", от того, когда значения вообще нет, даже пустого.
                </p>
            </div>
            <h2 className={s.test_title}>Контрольный тест</h2>
            <span>Какие бывают литералы?</span>
            <div>

      <LiteralTest />
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
