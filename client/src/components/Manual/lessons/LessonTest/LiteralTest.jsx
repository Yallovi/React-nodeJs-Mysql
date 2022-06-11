import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import  s  from "../LessonTest/TestManualChapter.module.css"
import {useSelector} from 'react-redux';
import Alert from '../../../hooks/useAlert';
import { testApi } from '../../../../api/api';



const LiteralTest = () => {
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

          }
    });
    const onSubmit = data => {
        console.log(data)
        const {answer_one, answer_two, answer_three, answer_four, answer_five, answer_six, answer_seven} = data;
        if ((answer_one && answer_two && answer_three && answer_four && answer_five && answer_six) === true && answer_seven === undefined) {
            if (isAuth) {
                testApi.addTestProgress(userId,lessonTheoryId )
                .then(data => alert(data.values.message))   
            }
            setAlertSuccess(true)
        }else {
            setAlertError(true)
        }
        console.log(data)
    }
  

  
    return (
       <><div className={s.test_content}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_one"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Числовые литералы</label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_two"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Арифметические операторы</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_three"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}>Строковые литералы</label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_four"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Литералы даты и времени </label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_five"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Битовые литералы </label>
                    </div>
                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_six"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> NULL </label>
                    </div>

                    <div className={s.sub_content_test}>
                        <Controller
                            name="answer_seven"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />} />
                        <label className={s.text_test}> Другие </label>
                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}

                 {alertError ? <Alert type="error" message="Упс, попробуйте еще раз :)" /> : null}
                {alertSuccess ? <Alert type="success" message="Вы молодцы! продолжайте старатсья!" /> : null}
                    <input type="submit" className={s.submit_test} />
                </form>
            </div></>
    );
}

export default LiteralTest