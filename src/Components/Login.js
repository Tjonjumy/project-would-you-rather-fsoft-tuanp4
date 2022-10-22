import React from 'react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Avatar from './Avatar';

import { authActions } from '../Store/authUser';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.receiveUser.users);

    let userSlected;

    const lstUsersObj =[];
    for (const user in users) {
        lstUsersObj.push(users[user]);
    }

    const handleSelectAvatar = (userId) => {
        console.log(userId)
        userSlected = (users[userId]);
    }
    const lstUsers = lstUsersObj.map(user => {
        return <Avatar user={user} key={user.id} onSelectAvatar={handleSelectAvatar}/>
    })

    const onSubmitSelectAvatar = () => {
        dispatch(authActions.login(userSlected));
        navigate("/");
    }

    return <Fragment>
        <div className="login-page-container d-flex">
            <div className="users-login">
                <div className="card">
                    <div className="card-header">
                    <h3>Welcome to the Would You Rather App!</h3>
                    <p>Please slect avatar and login to continue</p>
                    </div>
                    <div className="card-body">
                        <div className="row pb-4">
                            {lstUsers}
                        </div>
                        <div className="btn btn-success btn-login" onClick={onSubmitSelectAvatar}>Login</div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Login;