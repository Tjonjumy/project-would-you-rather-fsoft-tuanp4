import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import * as DataAPI from './untils/_DATA';

import { userActions } from './Store/user';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
      DataAPI._getUsers().then(users => dispatch(userActions.getListUsers(users)));
  }, []);

  return (
    <Router>
      {   !users && !isAuth &&
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
      }
      { 
        !isAuth && users &&
        <Login />
      }
      {
        isAuth &&
        <Fragment>
          <Navbar />
          <MainPage />
        </Fragment>
      }
    </Router>
  );
}

export default App;
