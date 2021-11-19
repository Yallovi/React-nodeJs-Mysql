import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LessonOne from './components/LessonOne';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import s from './app.module.css';
import Login from './components/registration/Login';
import Registration from './components/registration/Regestration';
import {useSelector} from 'react-redux';


function App() {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <BrowserRouter >
    <div className={s.app}>
      <Navbar />
      {!isAuth &&
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registrahion"  component={Registration} />
        </Switch>
      }
      {/* <Registrathion />   */}
      {/* <LessonOne />    */}
    </div>
    </BrowserRouter>
  );
}

export default App;