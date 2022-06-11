import React from 'react';
import { useSelector } from 'react-redux';
import s from '../literals/literals.module.css';
import manual from '../../../utils/manual.json';
import { NavLink } from 'react-router-dom';
import Footer from '../../../main-screen/footer/Footer'


export default function CreateDatabase() {

  const itemTitle = useSelector(state => state.manualReducer.itemTitle);
  console.log('itemTitle: ', itemTitle);
  
  const theory = useSelector(state => state.manualReducer.theory);
  console.log('theory: ', theory);  

  return (
  <div className={s.main}>
  <div className={s.container}>
      <div className={s.content}>
      <div className={s.container__title}>
        <h2 className={s.container__title}> Команды для манипулирования базами данных   </h2>
      </div>
      <div className={s.definition}>
           <p> <span>CREATE DATABASE</span> `db_name`;
           </p>
        </div>
        <p>Параметр команды создания баз данных — имя, выдаваемое создаваемой базе данных. Например, для создания базы данных под названием "my_database" нужно ввести команду</p>
        <div className={s.definition}>
           <p><span>CREATE DATABASE</span> `my_database`;
           </p>
        </div>
        <p>Несмотря на то, что современная версия MySQL позволяет создавать БД с кириллическими и специальными символами в названии, принято использовать латинские буквы, цифры и знаки подчеркивания («_»).</p>
        <p>При одновременной работе в нескольких базах данных в командах нужно уточнять, с данными какой БД вы работаете. Для этого используется разделитель точка — «.». Так, чтобы обратиться к атрибуту "attribute" таблицы "table", находящейся в базе данных "database1", нужно использовать запись:</p>
            <div className={s.definition}>
           <p>
           `database1`.`table`.`attribute`
           </p>
        </div>
        <p>Если же вам понадобится обратиться к аналогичному атрибуту такой же таблицы, находящейся в БД "database2", запись станет такой:</p>
        <div className={s.definition}>
           <p>
           `database2`.`table`.`attribute`
           </p>
        </div>
        <p>Для того, чтобы вводимые команды применялись к конкретной базе данных по умолчанию, можно воспользоваться командой USE и ввести название базы данных, с которой мы будем в дальнейшем работать:</p>
        <div className={s.definition}>
           <p>
           USE `my_database`;
           </p>
        </div>
        <p>После выполнения команды USE следующие записи будут эквивалентны:</p>
        <div className={s.definition}>
           <p>
           `my_database`.`table1`
`table1`
           </p>
        </div>
        <p>3.	Удаление существующей базы данных выполняется командой DROP DATABASE, которая в качестве единственного аргумента принимает название удаляемой базы данных. Например, чтобы удалить созданную вами в начале работы БД "my_database", нужно выполнить:</p>
        <div className={s.definition}>
           <p>
           <span>DROP DATABASE</span> `my_database`;
           </p>
        </div>
        <p>После успешного удаления вы можете заново создать ее. Учтите, что если бы в вашей базе данных были таблицы и данные, вся эта информация была бы утеряна навсегда.</p>
        <p>Для просмотра информации о базах данных, их таблиц, а также привилегий текущего пользователя, используется команда SHOW.</p>

            <p>1. Увидеть список всех доступных пользователю баз данных можно с помощью команды:</p>
            <div className={s.definition}>
           <p>
           <span>SHOW DATABASES</span>;
           </p>
        </div>
        <p>2. Увидеть список всех таблиц в используемой базе данных можно с помощью команды:</p>
        <div className={s.definition}>
           <p>
           <span>SHOW TABLES;</span>;
           </p>
        </div>
        <p>3.	Для вывода информации о таблице "table_name" используйте команду:</p>
        <div className={s.definition}>
           <p>
           <span>SHOW CREATE TABLE</span> `table_name`;
           </p>
        </div>
        <p>Обратите внимание, что результатом выполнения команды будет команда создания таблицы с учетом всех изменений, произведенных над таблицей в процессе работы с базой данных. 
            4.	Увидеть список всех прав текущего пользователя СУБД можно с помощью команды:
        </p>
        <div className={s.definition}>
           <p>
           <span>SHOW</span> GRANTS;
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

