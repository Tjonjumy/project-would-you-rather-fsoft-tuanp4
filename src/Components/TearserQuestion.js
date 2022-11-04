import { Fragment } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from "react-router-dom";

const TearserQuestion = (props) => {

    let { question, isAnswer } = props;

    const navigate = useNavigate();

    // uppercase first letter
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // get list Users
    const users = useSelector(state => state.user.users);
    const authUser = useSelector(state => state.auth);

    // get avatar of author questions
    const getAvatarUser = (id) => {
        for  (const userId in users) {
            if (userId == id) {
                return users[userId].avatarURL;
            }
        }
    } 

    return <Fragment>
        <div className="qs-cart-container pt-4">
            <div className="card">
                <div className="card-header">
                    <h4>{capitalizeFirst(question.author)} asks:</h4>
                </div>
                <div className="card-body">
                    <div className="card-body qs-cart-body row">
                        <div className="qs-card-avatar">
                            <img src={getAvatarUser(question.author)} />
                        </div>
                        <div className="card-body-content d-flex flex-column align-items-start justify-content-center">
                            <h5 className="card-title">Would you rather</h5>
                            <div className="ps-4">
                                <label className="card-text ms-2">{question.optionOne.text}</label>
                            </div>
                            <div className="ps-4">
                                <label className="card-text ms-2">{question.optionTwo.text}</label>
                            </div>
                            {   !isAnswer &&
                                <NavLink href="#" className="btn btn-primary mt-3 ms-4" to={`/question/${question.id}`}>View Poll </NavLink>
                            }
                            {   isAnswer &&
                                <NavLink href="#" className="btn btn-primary mt-3 ms-4" to={`/question/${question.id}`}>View Result</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default TearserQuestion;