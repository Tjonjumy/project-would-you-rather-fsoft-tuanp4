import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import TearserQuestion from './TearserQuestion';

const Home = () => {
    const userId = useSelector(state => state.auth.id);
    const users = useSelector(state => state.user.users);
    let authUser;
    for (const id in users) {
        if (id === userId) {
            authUser = users[id];
        }
    }
    const allQuestions = useSelector(state => state.questions.questions);

    // get answered questions of user
    const {answers} = authUser;

    // get questionId list of answered questions
    let answeredQuestionsId = [];
    for (const qsId in answers) {
        answeredQuestionsId.push(qsId);
    }

    // get list answered questions
    const answeredQuestions = Object.values(allQuestions)
    .filter(question => answeredQuestionsId.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

    // get list unanswered questions to render UI
    let lsAansweredQuestions;
    if (answeredQuestions.length > 0) {
        lsAansweredQuestions = answeredQuestions.map(question => {
            return <TearserQuestion question={question} key={question.id} isAnswer={true}/>
        })
    }

    // get list unanswered questions
    const unansweredQuestions = Object.values(allQuestions)
    .filter(question => !answeredQuestionsId.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

    // get list unanswered questions to render UI
    let lstUnansweredQuestions;
    if (unansweredQuestions.length > 0) {
        lstUnansweredQuestions = unansweredQuestions.map(question => {
            return <TearserQuestion question={question} key={question.id} isAnswer={false} />
        })
    }
 
    return <Fragment>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" 
                    data-bs-toggle="tab" data-bs-target="#nav-home" type="button" 
                    role="tab" aria-controls="nav-home" aria-selected="true">
                    Unanswered Questions
                </button>
                <button className="nav-link" id="nav-profile-tab" 
                    data-bs-toggle="tab" data-bs-target="#nav-profile" 
                    type="button" role="tab" aria-controls="nav-profile" 
                    aria-selected="false">
                    Answered Questions
                </button>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" 
                role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                {lstUnansweredQuestions}
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                aria-labelledby="nav-profile-tab" tabIndex="0">
                {lsAansweredQuestions}
            </div>
        </div>
    </Fragment>
}

export default Home;