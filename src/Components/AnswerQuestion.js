import { Fragment, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { questionsActions } from '../Store/questions';
import { userActions } from "../Store/user";

const AnswerQuestion = () => {
    let { qsId } = useParams();
    const navigate = useNavigate ();
    let isDisabled = false;
    const dispatch = useDispatch();

    // get list Users
    const users = useSelector(state => state.user.users);
    const authUser = useSelector(state => state.auth);

    // get list answers of authUser
    let answers;
    for (const idUser in users) {
        if (idUser === authUser.id) {
            answers = users[idUser].answers;
            break;
        }
    }

    // Check authUser is answered
    let isAuthUserAnswered = false;
    for (const answerId in answers) {
        if (answerId === qsId) {
            isAuthUserAnswered = true;
            console.log(isAuthUserAnswered)
            break;
        }
    }

    // get question with questionId
    let question;
    const allQuestions = useSelector(state => state.questions.questions);
    if (qsId) {
        for (const questionId in allQuestions) {
            if (questionId == qsId) {
                question = allQuestions[qsId];
            }
        }
    }

    // Uppercase first letter
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Get avatar of author question
    const getAvatarUser = (id) => {
        for  (const userId in users) {
            if (userId == id) {
                console.log(users[userId].avatarURL, userId, id)
                return users[userId].avatarURL;
            }
        }
    } 

    // Get answer of User
    let optionAnswer = 1;
    const onSelectOptionAnswer = (option) => {
        optionAnswer = option.target.value == 1 ? "optionOne" : "optionTwo";
        isDisabled = false;
    }

    // Get action.payload
    const onSubmitAnswer = (idQs) => {
        const actionQs = {
            authUser: authUser.id,
            qsId: idQs,
            answer: optionAnswer
        };

        const actionUser = {
            idUser: authUser.id,
            qsId: idQs,
            answer: optionAnswer
        };
        dispatch(questionsActions.addAnswerToQuestion(actionQs));
        dispatch(userActions.addAnswerToUser(actionUser));
    }

    // caculate answer ratio
    const roundFix = (qty, total) => {
        let ratio = qty*100/total;
        if (ratio%10 == 0) {
            return ratio + '%';
        }
        return ratio.toFixed(1) + '%';
    }
    const optionOneQty = Object.keys(question.optionOne.votes).length;
    const optionTwoQty = Object.keys(question.optionTwo.votes).length;
    const totalAnswer = optionOneQty + optionTwoQty;
    const rateOptionOne = roundFix(optionOneQty, totalAnswer);
    const rateOptionTwo = roundFix(optionTwoQty, totalAnswer);


    return  <Fragment>
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
                                {   !isAuthUserAnswered &&
                                    <Fragment>
                                        <div className="ps-4">
                                            <input type="radio" name={`${question.id}-optionAnswer`}
                                                onChange={onSelectOptionAnswer}
                                                id={`${question.id}-optionOne`} value="1" />
                                            <label className="card-text ms-2" htmlFor={`${question.id}-optionOne`}>{question.optionOne.text}</label>
                                        </div>
                                        <div className="ps-4">
                                            <input type="radio" name={`${question.id}-optionAnswer`}
                                                onChange={onSelectOptionAnswer}
                                                id={`${question.id}-optionTwo`} value="2" />
                                            <label className="card-text ms-2" htmlFor={`${question.id}-optionTwo`}>{question.optionTwo.text}</label>
                                        </div>
                                        <a className={`btn btn-primary mt-3 ms-4 ${isDisabled ? "disabled" : ""}`} onClick={() => onSubmitAnswer(question.id)}>Answer</a>
                                    </Fragment>
                                }
                                {   isAuthUserAnswered && 
                                    <Fragment>
                                    <div className="ps-4 option-content">
                                            <p className="card-text ms-2" >{question.optionOne.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                style={{width: rateOptionOne}} 
                                                aria-valuenow={rateOptionOne} 
                                                aria-valuemin="0" 
                                                aria-valuemax="100">{rateOptionOne}</div>
                                            </div>
                                            <div className="text-center mt-2">{optionOneQty} out of {totalAnswer} votes</div>
                                        </div>
                                        <div className="ps-4 option-content">
                                            <p className="card-text ms-2" >{question.optionTwo.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                style={{width: rateOptionTwo}} 
                                                aria-valuenow={rateOptionTwo} 
                                                aria-valuemin="0" 
                                                aria-valuemax="100">{rateOptionTwo}</div>
                                            </div>
                                            <div className="text-center mt-2">{optionTwoQty} out of {totalAnswer} votes</div>
                                        </div>
                                        <button className="btn btn-secondary mt-3 ms-4" onClick={() => navigate(-1)}>Back</button>
                                    </Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
}

export default AnswerQuestion;