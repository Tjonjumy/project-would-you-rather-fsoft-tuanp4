import React from 'react';

import { Routes, Route } from "react-router-dom";

import Home from './Home';
import AnswerQuestion from './AnswerQuestion';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import ComponentNotMatch from './ComponentNotMatch';

const MainPage = () => {

    
    
    return <div className="main-content container pt-5 pb-5">
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/new-question" element={<NewQuestion/>}/>
            <Route path="/question/:qsId" element={<AnswerQuestion/>}/>
            <Route path="/leader-board" element={<Leaderboard/>}/>
            <Route path="*" element={<ComponentNotMatch />} />
        </Routes>
    </div>
}

export default MainPage;