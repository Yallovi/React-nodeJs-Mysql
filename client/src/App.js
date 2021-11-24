import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import s from './app.module.css';
import Login from './components/registration/Login';
import Registration from './components/registration/Regestration';
import {useSelector} from 'react-redux';


function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth);

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
    </div>
    </BrowserRouter>
  );
}

export default App;