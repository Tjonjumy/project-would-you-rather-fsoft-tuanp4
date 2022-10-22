import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../Store/authUser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
// import { faLight, faArrowRightFromBracket } from '@fortawesome/fontawesome-free-solid';

const MenuLeft = () => {
    const dispatch = useDispatch();

    const userLoggedIn = useSelector(state => state.auth);
    console.log(userLoggedIn)

    const onLogoutHanlde = () => {
        dispatch(authActions.logout())
    }
    return <Fragment>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="active" to="/new-question">New Question</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="active" to="/leader-board">Leaderboard</NavLink>
                            </li>
                        </ul>
                        <div className="me-3">Hello {userLoggedIn.name}</div>
                        <button type="button" className="btn btn-info btn-logout" onClick={onLogoutHanlde}>Logout</button>
                    </div>
                </div>
            </nav>
        </Fragment>
}

export default MenuLeft;