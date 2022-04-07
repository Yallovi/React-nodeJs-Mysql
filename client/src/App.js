import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import s from './app.module.css';
import Login from './components/registration/Login';
import Registration from './components/registration/Regestration';
import {useSelector, useDispatch} from 'react-redux';
import {authentication} from './api/api';
import Task from './components/task/Task';
import Tasks from './components/task/TaskForm';
import Manual from './components/Manual/Manual';
import ManualChapter from './components/Manual/ManualChapter';
import MainScreen from './components/main-screen/MainScreen';

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authentication())
  }, []);



  return (
    <BrowserRouter >
    <div className={s.app}>

      <Navbar />
      <Route path="/home" component={MainScreen} />
      <Route path="/task" component={Task} />
      <Route path="/manual" component={Manual} />
      <Route path="/taskForm" component={Tasks} />
      <Route path="/manualChapter" component={ManualChapter} />
      {!isAuth &&
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registrahion"  component={Registration} />
        </Switch>
      }
    </div>
    </BrowserRouter>
  );
}

export default App;