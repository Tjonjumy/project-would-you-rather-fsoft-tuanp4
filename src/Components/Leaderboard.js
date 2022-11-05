import { Fragment } from 'react';

const Leaderboard = () => {
    return <Fragment>
        <div className="card mb-3 p-3">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src="../images/avatars/fox.png" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h3 className="card-title">Card title</h3>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="score-title align-items-center d-flex justify-content-center">
                            Score
                        </div>
                        <div className="card-body align-items-center d-flex justify-content-center">
                            <div className="card-text score-box text-center">100</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Leaderboard;