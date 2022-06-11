import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import  s  from "../LessonTest/TestManualChapter.module.css"
import {useSelector} from 'react-redux';
import Alert from '../../../hooks/useAlert';
import { testApi } from '../../../../api/api';
import style from '../literals/literals.module.css'



const Lesson3Test = () => {
    const userId = useSelector(state => state.user.currentUser.userId)
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const lessonTheoryId = useSelector(state => state.manualReducer.itemTitle);
    const lessonTheoryTask = useSelector(state => state.manualReducer.theory);


    const [alertSuccess, setAlertSuccess] = useState()
    const [alertError, setAlertError] = useState()

    console.log('userId: ', userId);
    
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
        defaultValues: {
            answer_one: false,
            answer_two: false,
            answer_three: false,
            answer_four: false,
            answer5: false, answer6: false, answer7: false, answer8: false, answer9: false, answer10: false, answer11: false, answer12: false,
            answer13: false, answer14: false, answer15: false

          }
    });
    const onSubmit = data => {
        console.log(data)
        const {answer_one, answer_two, answer_three, answer_four, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15} = data;
        if (( answer_three && answer_four && answer7 && answer8 && answer11 && answer13) === true && (answer_one && answer_two &&  answer9 && answer10 && answer12, answer14, answer15) === false ) {
            testApi.addTestProgress(userId,lessonTheoryId,lessonTheoryTask )
            .then(data => alert(data.values.message))
            setAlertSuccess(true)
        }else {
            setAlertError(true)
        }
        console.log(data)
    }
  

  
    return (

        <div className={style.main}>
  <div className={style.container}>
      <div className={style.content}>
          <h1 className={style.container__title}>Контрольный тест Глава 3</h1>
      <div className={s.test_content}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <span>Какие две группы языков предложил Эдгар Кодд? </span>

                        <div className={s.sub_content_test}>
                        <Controller
                            name="answer_one"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Неряляционные литерали</label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_two"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Рецияционные строки</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_three"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>реляционная алгебра</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_four"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> реляционное исчисление </label>
                    </div>
                    </div>
                    <div>
                        <div style={{marginBottom: '20px', marginTop: '20px', color: '#ff4c4c', fontSize: '1.25em', fontWeight: '700'}}>Какой оператов отвечает за выборку данных? </div>

                        <div className={s.sub_content_test}>
                        <Controller
                            name="answer5"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>From</label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer6"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Where</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer7"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Select</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer8"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Group By </label>
                    </div>
                    </div>
                    <div>
                        <div style={{marginBottom: '20px', marginTop: '20px', color: '#ff4c4c', fontSize: '1.25em', fontWeight: '700'}}>За что отвечает оператор Where? </div>

                        <div className={s.sub_content_test}>
                        <Controller
                            name="answer6"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Опертор обзначающий бд из которой мы хотим получить результат</label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer8"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Оператор условия</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer8"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Оператор выборки данных</label>
                    </div>

                    </div>

                    <div>
                        <div style={{marginBottom: '20px', marginTop: '20px', color: '#ff4c4c', fontSize: '1.25em', fontWeight: '700'}}>За что отвечает оператор SUM? </div>

                        <div className={s.sub_content_test}>
                        <Controller
                            name="answer9"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Для получения среднего арифметического значения атрибута</label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer10"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Для поиска минимального и максимального значений атрибута</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer11"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Для подсчета суммы числовых значений атрибута</label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer12"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Для подсчета количества строк</label>
                    </div>

                    </div>

                    <div>
                        <div style={{marginBottom: '20px', marginTop: '20px', color: '#ff4c4c', fontSize: '1.25em', fontWeight: '700'}}>За что отвечает оператор GROUP BY? </div>

                        <div className={s.sub_content_test}>
                        <Controller
                            name="answer13"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Для разбиения результатов выборки</label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer14"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Для добавления условий</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer15"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Оператор выборки данных</label>
                    </div>

                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}

                 {alertError ? <Alert type="error" message="Упс, попробуйте еще раз :)" /> : null}
                {alertSuccess ? <Alert type="success" message="Вы молодцы! продолжайте старатсья!" /> : null}
                    <input type="submit" className={s.submit_test} />
                </form>
            </div>
          </div>
      </div>
      </div>
    );
}

export default Lesson3Test