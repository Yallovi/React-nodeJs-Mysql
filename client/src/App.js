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
import PrivateOffice from './components/privateOffice/PrivateOffice';
import Playground from './components/playGround/playground';
import Literals from './components/Manual/lessons/literals/Literals'
import SyntaxSqlSelect from './components/Manual/lessons/syntaxSqlSelect/SyntaxSqlSelect'
import SelectOperatore from './components/Manual/lessons/selectOperatore/SelectOperatore'
import ConditionWhere from './components/Manual/lessons/ConditionWhere/ConditionWhere'
import NumericOperation from './components/Manual/lessons/NumericOperation/NumericOperation'
import GroupingResults from './components/Manual/lessons/OperationGrouping/GroupingResults'
import CreateDatabase from './components/Manual/lessons/CreateDatabase/CreateDatabase'
import Lesson3Test from './components/Manual/lessons/LessonTest/Lesson3Test';

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
      <Route path="/basic-database-concepts" component={ManualChapter} />
      <Route path="/Literals" component={Literals} />
      <Route path={isAuth===false ? '#' : "/syntax-sql-select"} component={SyntaxSqlSelect} />
      <Route path= {isAuth===false ? '#' :"/select-operatore"} component={SelectOperatore} />
      <Route path={isAuth===false ? '#' : "/syntax-condition-where"} component={ConditionWhere} />
      <Route path= {isAuth===false ? '#' :"/syntax-numeric-operation"} component={NumericOperation} />
      <Route path= {isAuth===false ? '#' :"/syntax-grouping-results"} component={GroupingResults} />
      <Route path= {isAuth===false ? '#' :"/guide-create-database"} component={CreateDatabase} />
      <Route path= {isAuth===false ? '#' :"/syntax/test"} component={Lesson3Test} />


      


      {/* SelectOperatore */}
      <Route path="/privateOffice"  component={PrivateOffice} />
      <Route path="/playground"  component={Playground} />
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