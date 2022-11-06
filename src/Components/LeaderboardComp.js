import { Fragment } from 'react';

const LeaderboardComp = (props) => {
    const { leaderboard, rank } = props;

    let bgRank = '';
    switch (rank) {
        case 0:
            bgRank = 'bg-success';
            break;
        case 1:
            bgRank = 'bg-danger';
            break;
        default:
            bgRank = 'bg-warning';
    }
    return <Fragment>
        <div className="card mb-3 p-3 leader-board-comp">
            <div className="row g-0">
                <div className="rank-index">
                    <span className={`badge ${bgRank} rank-text`}>{rank + 1}</span>
                </div>
                <div className="col-md-1">
                </div>
                <div className="col-md-3 leader-board-avatar">
                    <img src={leaderboard.avatarURL} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h3 className="card-title mb-2">{leaderboard.name}</h3>
                        <div>
                            <span className="badge bg-info">AnswerQuestion: {leaderboard.answerCount}</span>
                        </div>
                        <div>
                            <span className="badge bg-info">Question: {leaderboard.questionCount}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className={`score-title align-items-center d-flex justify-content-center rank-${rank +1}`}>
                            Score
                        </div>
                        <div className="card-body align-items-center d-flex justify-content-center">
                            <div className="card-text score-box text-center">{leaderboard.total * 10}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default LeaderboardComp;