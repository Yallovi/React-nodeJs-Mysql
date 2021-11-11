import {React, useState} from 'react';
import {reqApi} from '../api/api';

const LessonOne = () => {

    const [name, setReqText] = useState('');

    return (
        <div className="lesson">
            <textarea value={name} onChange={(e) => setReqText(e.target.value)}type="text" placeholder="Введите запрос"  cols="30" rows="10"/>
            <button className="req_btn" onClick ={() => reqApi(name)}>Отправить запрос</button>
        </div>
    );


};

export default LessonOne;
