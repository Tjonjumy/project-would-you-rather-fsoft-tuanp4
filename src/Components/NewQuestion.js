import { Fragment, useState } from 'react';

import * as DataAPI from '../untils/_DATA';

import { useDispatch, useSelector } from 'react-redux';
import { questionsActions } from '../Store/questions';
import { userActions } from "../Store/user";

const NewQuestion = () => {
    const dispatch = useDispatch();

    const [isShowBackdrop, setIsShowBackdrop] = useState('');

    const [optOneTxt, setOptOneTxt] = useState('');
    const [optTwoTxt, setOptTwoTxt] = useState('');

    const [enteredOptOneTxtTouched, setEnteredOptOneTxtTouched] = useState(false);
    const [enteredOptTwoTxtTouched, setEnteredOptTwoTxtTouched] = useState(false);

    // is invalid option input
    let isInvalidOptOne = !optOneTxt.trim() && enteredOptOneTxtTouched;
    let isInvalidOptTwo = !optTwoTxt.trim() && enteredOptTwoTxtTouched;
    let isInvalidForm = isInvalidOptOne || isInvalidOptTwo || !optOneTxt.trim() || !optTwoTxt.trim();

    const inputBlurHandler = (event) => {
        const filedName = event.target.name;
        const value = event.target.value;
        switch (filedName) {
            case 'optOneTxt':
                setOptOneTxt(value);
                setEnteredOptOneTxtTouched(true);
                break;
            default:
                setOptTwoTxt(value);
                setEnteredOptTwoTxtTouched(true);
        }
    }

    // get author
    const author = useSelector(state => state.auth.id);

    // handle save new question
    const addQuestionHandler = (event) => {
        event.preventDefault();
        setEnteredOptOneTxtTouched(true);
        setEnteredOptTwoTxtTouched(true);
        if(isInvalidForm) {
            return;
        }
        setIsShowBackdrop(true);
        const newQuestion = {
            optionOneText: optOneTxt,
            optionTwoText: optTwoTxt,
            author
        }
        console.log(newQuestion)
        DataAPI._saveQuestion(newQuestion).then(newQuestion => {
            console.log(newQuestion)
            dispatch(questionsActions.saveNewQuestion(newQuestion));
            dispatch(userActions.addQuestionToUser(newQuestion));
            // reset form create new question
            setOptOneTxt('');
            setOptTwoTxt('');
            setEnteredOptOneTxtTouched(false);
            setEnteredOptTwoTxtTouched(false);
            setTimeout(() => {
                setIsShowBackdrop(false);
            }, 300)
        });
    }
    return <Fragment>
        {  isShowBackdrop && 
            <div id="backdrop">
                <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        <div className="card">
            <div className="card-header">
                <h3 className="text-center">Create New Question</h3>
            </div>
            <div className="card-body">
                <div>Complete the question:</div>
                <h4 className="text-bold mt-3 mb-3">Would you rather...</h4>
                <form onSubmit={addQuestionHandler}>
                    <div className="mb-3">
                        <input type="text" className={`form-control ${isInvalidOptOne ? "is-invalid" : ""}`}
                            name="optOneTxt"
                            value={optOneTxt}
                            //ref={optOneTxt}
                            placeholder="Enter option one text here"
                            onChange={inputBlurHandler}
                        />
                        <div className="invalid-feedback">
                            Please enter option one text.
                        </div>
                    </div>  
                    <div className="mb-3 text-center fw-bold">OR</div>
                    <div className="mb-3">
                        <input type="text" className={`form-control ${isInvalidOptTwo ? "is-invalid" : ""}`} 
                            name="optTwoTxt"
                            value={optTwoTxt}
                            placeholder="Enter option two text here"
                            onChange={inputBlurHandler}
                        />
                        <div className="invalid-feedback">
                            Please enter option two text.
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-success w-100">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </Fragment>
}

export default NewQuestion;