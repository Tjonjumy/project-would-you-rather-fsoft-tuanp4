import { Fragment } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

const Question = (props) => {

    let { question } = props;

    const navigate = useNavigate();

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const users = useSelector(state => state.user.users);
    const getAvatarUser = (id) => {
        for  (const userId in users) {
            if (userId == id) {
                return users[userId].avatarURL;
            }
        }
    } 

    const goDetailQuestion = (idQs) => {
        navigate(`/question/${idQs}`);
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
                                <input type="radio" name={`${question.id}-optionAnswer`}
                                    id={`${question.id}-optionOne`} value="1" />
                                <label className="card-text ms-2" htmlFor={`${question.id}-optionOne`}>{question.optionOne.text}</label>
                            </div>
                            <div className="ps-4">
                                <input type="radio" name={`${question.id}-optionAnswer`}
                                    id={`${question.id}-optionTwo`} value="2" />
                                <label className="card-text ms-2" htmlFor={`${question.id}-optionTwo`}>{question.optionTwo.text}</label>
                            </div>
                            <a href="#" className="btn btn-primary mt-3 ms-4" onClick={goDetailQuestion(question.id)}>View poll</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Question;