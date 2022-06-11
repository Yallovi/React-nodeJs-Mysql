import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import  s  from "../LessonTest/TestManualChapter.module.css"
import {useSelector} from 'react-redux';
import Alert from '../../../hooks/useAlert';
import { testApi } from '../../../../api/api';



const TestManualChapter = () => {
    const userId = useSelector(state => state.user.currentUser.userId)
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const lessonTheoryId = useSelector(state => state.manualReducer.itemTitle);
    console.log(lessonTheoryId)
    const lessonTheoryTask = useSelector(state => state.manualReducer.theory);
console.log(lessonTheoryTask);

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
        // сделать проверку на авторизацию
        const {answer_one, answer_two, answer_three, answer_four} = data;
        if (answer_one === true && (answer_two && answer_three  && answer_four) === false) {
            console.log(userId, lessonTheoryId)
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
        <div className={s.test_content}>

            <form onSubmit={handleSubmit(onSubmit)}>
            {alertSuccess ?  <Alert type="success" message="Вы молодцы! продолжайте старатсья!" /> : null}
            {alertError ? <Alert type="error" message="Упс, попробуйте еще раз :)" /> : null}
                <div className ={s.sub_content_test}>
                <Controller
                    name="answer_one"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />}
                />
                <label className={s.text_test}> База данных — это набор данных, хранящихся в структурированном виде</label>
                </div>

                <div className ={s.sub_content_test}>
                <Controller
                    name="answer_two"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />}
                />
                <label className={s.text_test}> База данных — это набор данных, хранящиеся в хаотичном виде</label>
                </div>

                <div className ={s.sub_content_test}>
                <Controller
                    name="answer_three"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />}
                />
                <label className={s.text_test}> База данных — это набор данных, хранящиеся в структурированном виде</label>
                </div>

                <div className ={s.sub_content_test}>
                <Controller
                    name="answer_four"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => <input className={s.checkBox_test} type="checkbox" {...field} />}
                />
                <label className={s.text_test}> Другое </label>
                </div>
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className={s.submit_test} />
            </form>
        </div>
    );
}

export default TestManualChapter