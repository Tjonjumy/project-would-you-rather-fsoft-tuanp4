import {Fragment } from 'react';

const ComponentNotMatch = () => {
    return <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>404 Not Found</h2>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default ComponentNotMatch;